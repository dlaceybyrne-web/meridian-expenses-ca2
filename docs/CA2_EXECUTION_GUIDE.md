# CA2 Execution Guide

## 1. Put the project in a GitHub repository

The project files should be at the repository root. Do not create an unnecessary second project directory inside the repository.

Required CA2 files:

- `.github/workflows/security.yml`
- `tests/security/authorization.test.js`
- `package.json` with `test:security`

## 2. Commit the CA2 pipeline

Suggested commit message:

`Add automated security testing pipeline`

Push to `main` or `master`, then open GitHub Actions.

## 3. Run the pipeline

The workflow runs automatically on pushes and pull requests. It can also be started manually using `workflow_dispatch`.

The stages are:

1. Checkout
2. Node.js 22 setup
3. Dependency installation
4. Test database seeding
5. Semgrep SAST
6. npm audit SCA
7. Gitleaks secret detection
8. Application startup
9. Custom authorisation tests
10. Failure log collection
11. Application cleanup

## 4. Record actual results

Record what each tool actually reports. Do not invent vulnerabilities, severities or successful results.

The current Meridian source intentionally contains CA1 vulnerabilities. Therefore an initial pipeline failure can be legitimate evidence.

## 5. Establish the final secure baseline

For the final CA2 demonstration, remediate the relevant vulnerabilities and configuration issues required for the selected pipeline checks to pass. In particular, the hard-coded JWT secret should not remain in source code if Gitleaks identifies it.

Only call the baseline "passing" after GitHub Actions actually confirms it.

## 6. Demonstrate the custom IDOR control

On the secure version, the custom test should confirm that:

- Jane can access her own claim.
- Jane cannot access Rob Smith's claim.
- The administrator retains access to `/admin/users`.
- Jane receives HTTP 403 from `/admin/users`.

## 7. Deliberately introduce IDOR

Temporarily remove the ownership restriction from the claim lookup so that it returns a claim using only the claim ID.

Do this only in the controlled assessment repository.

Commit the change and push it.

Expected CA2 evidence:

- the generic checks may remain unchanged;
- the custom IDOR test should fail;
- GitHub Actions should therefore fail the security job.

Capture the actual failed run.

## 8. Restore the secure implementation

Restore the ownership check, commit the fix and push again.

Capture the successful retest.

## 9. Report the limitation honestly

The pipeline cannot prove that the application is secure. It only checks the controls and application-specific assertions that have been configured.

Discuss false positives, false negatives, business-logic limitations, maintenance and developer alert burden in the report.
