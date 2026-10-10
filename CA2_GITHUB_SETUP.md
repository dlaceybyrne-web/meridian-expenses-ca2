# CA2 GitHub Security Pipeline Setup

This project contains the CA2 automation files:

- `.github/workflows/security.yml` — GitHub Actions CI pipeline
- `tests/security/authorization.test.js` — custom IDOR/BOLA and administrative authorisation tests
- `package.json` — `npm run test:security`
- `docs/CA2_EVIDENCE_CHECKLIST.md` — evidence tracker
- `docs/CA2_EXECUTION_GUIDE.md` — practical execution sequence
- `docs/CA2_REPORT_SKELETON.md` — report structure
- `docs/CA2_AI_FLUENCY_TEMPLATE.md` — AI declaration template

## Important

The supplied Meridian application is intentionally vulnerable for CA1. The CA2 custom tests are security assertions that should pass only after the corresponding authorisation controls have been correctly implemented.

The two custom tests are:

1. **IDOR/BOLA:** Jane can access her own Claim 1 but must not access Rob Smith's Claim 3.
2. **Administrative authorisation:** Jane (staff) must receive HTTP 403 from `/admin/users`, while the admin account must retain HTTP 200 access.

## GitHub setup

1. Create or use the GitHub repository containing the Meridian project.
2. Place the CA2 files at the repository root.
3. Commit and push to `main` or `master`.
4. Open the repository's **Actions** tab.
5. Open **Automated Security Testing**.
6. Record the actual results using the evidence checklist.

The workflow runs on pushes to `main`/`master`, pull requests and manual workflow dispatch.

## CA2 demonstration sequence

1. Establish a secure baseline and run the pipeline.
2. Capture the actual successful baseline evidence.
3. Deliberately remove the ownership restriction from the claim query.
4. Commit the vulnerable change.
5. Capture the failed custom IDOR test and GitHub Actions run.
6. Restore the secure query.
7. Push the fix and capture the successful retest.

Do not claim that a result passed or failed until the actual pipeline output has been captured.
