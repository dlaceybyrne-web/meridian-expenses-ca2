const assert = require('node:assert/strict');

const BASE_URL = process.env.BASE_URL || 'http://127.0.0.1:3000';

async function login(username, password) {
  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    redirect: 'manual',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ username, password }).toString()
  });

  assert.equal(response.status, 302, `${username} should receive a login redirect`);
  const setCookie = response.headers.get('set-cookie');
  assert.ok(setCookie, `${username} login did not return a session cookie`);
  return setCookie.split(';')[0];
}

async function testIdor() {
  const janeCookie = await login('jdoe', 'password1');

  const ownClaim = await fetch(`${BASE_URL}/claim/1`, {
    headers: { cookie: janeCookie }
  });
  assert.equal(ownClaim.status, 200, 'Jane should be able to access her own claim');

  const otherUsersClaim = await fetch(`${BASE_URL}/claim/3`, {
    headers: { cookie: janeCookie }
  });
  assert.notEqual(
    otherUsersClaim.status,
    200,
    'IDOR/BOLA failure: Jane accessed Rob Smith\'s claim'
  );

  console.log('PASS: IDOR/BOLA ownership boundary enforced');
}

async function testAdminAuthorisation() {
  const janeCookie = await login('jdoe', 'password1');
  const adminCookie = await login('admin', 'admin');

  const staffResponse = await fetch(`${BASE_URL}/admin/users`, {
    headers: { cookie: janeCookie }
  });
  assert.equal(
    staffResponse.status,
    403,
    `Staff user should be denied admin access (received ${staffResponse.status})`
  );

  const adminResponse = await fetch(`${BASE_URL}/admin/users`, {
    headers: { cookie: adminCookie }
  });
  assert.equal(
    adminResponse.status,
    200,
    `Administrator should retain access to admin function (received ${adminResponse.status})`
  );

  console.log('PASS: administrative authorisation boundary enforced');
}

async function waitForServer() {
  for (let attempt = 1; attempt <= 30; attempt += 1) {
    try {
      const response = await fetch(`${BASE_URL}/login`);
      if (response.status === 200) return;
    } catch (_) {
      // Server is still starting.
    }
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  throw new Error(`Meridian Express did not become available at ${BASE_URL}`);
}

(async () => {
  await waitForServer();
  await testIdor();
  await testAdminAuthorisation();
  console.log('All custom security tests passed.');
})().catch(error => {
  console.error(`SECURITY TEST FAILED: ${error.message}`);
  process.exit(1);
});
