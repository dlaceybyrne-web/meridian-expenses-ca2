# Automated Security Testing Pipeline and Software Assurance Briefing

## 1. Introduction and Pipeline Objectives

Describe Meridian Expenses Express, the security problem being addressed and the objectives of the automated pipeline.

## 2. Pipeline Architecture and Tool Selection

Explain the CI flow and justify:

- GitHub Actions
- Semgrep SAST
- npm audit SCA
- Gitleaks secret detection
- custom JavaScript authorisation tests

## 3. Custom Scripted Security Tests

Explain the IDOR/BOLA and administrative authorisation tests. State what each test is designed to prove and why generic tooling may not reliably establish the application-specific security requirement.

## 4. CI Integration and Security Thresholds

Explain the automated triggers, build-breaking conditions and warning/review conditions. Justify why high/critical findings and failed authorisation tests are treated more seriously than lower-severity findings.

## 5. Demonstration and Results

Document the actual baseline, deliberate IDOR change, failed pipeline, remediation and successful retest. Insert only genuine evidence from GitHub Actions and local testing.

## 6. Critical Evaluation

Discuss:

- what the pipeline catches;
- what it does not reliably catch;
- false positives;
- false negatives;
- alert fatigue;
- maintenance burden;
- dependency on correct configuration;
- limitations of automated testing.

## 7. Software Assurance Standards Alignment

Map the implementation to ISO/IEC 27034 and OWASP SAMM as required by the assessment brief. Do not claim full organisational maturity from one CI pipeline.

## 8. Non-Technical Stakeholder Briefing

Explain the business case, risk reduction, cost/benefit, governance value and limitations in language suitable for senior stakeholders.

## 9. Conclusion

Summarise what the practical implementation demonstrated and its limitations.

## References

Use Harvard referencing and include the sources actually used.

## Appendices

A. CI workflow
B. IDOR/BOLA test
C. Administrative authorisation test
D. SAST results/configuration
E. SCA results
F. Secret detection results
G. Deliberate vulnerability demonstration
H. GitHub Actions evidence
I. Evidence/requirements mapping
J. AI Fluency Declaration
