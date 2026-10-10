# CA2 Demonstration Scripts

No automated script is provided here to fabricate CA2 evidence. The deliberate-vulnerability demonstration should be performed as a controlled source-code change and documented from the actual Git/GitHub results.

The intended sequence is:

1. Secure baseline.
2. Capture passing evidence.
3. Remove the IDOR ownership restriction in the assessment copy.
4. Commit and push.
5. Capture the failing custom security test.
6. Restore the ownership restriction.
7. Commit and push.
8. Capture the successful retest.
