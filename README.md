# Meridian Expenses – CA2 Security Testing Pipeline

## About this project

This repository contains my work for Secure Programming and Scripting CA2 as part of the CCT College Dublin PGDip in Cybersecurity.

I used the Meridian Expenses Node.js and Express application to build and test an automated security testing pipeline. The application was originally provided as a deliberately vulnerable teaching project.

## What I implemented

For CA2, I configured a GitHub Actions workflow to run security checks automatically.

The pipeline includes:

- **Semgrep** to check the code for potential security issues.
- **npm audit** to identify vulnerable dependencies.
- **Gitleaks** to check for exposed secrets.
- **Custom security tests** to check access controls for expense claims and administrator functions.

I also tested how the pipeline responded to an intentional authorisation vulnerability. The failed and successful workflow runs are included as evidence.

## Running the application locally

```bash
npm install
npm run seed
npm start
```

The application runs at `http://127.0.0.1:3000`.

## Important security notice

Meridian Expenses is a deliberately vulnerable teaching application. It must only be run and tested locally. It should not be deployed to a public server or used with real personal or financial information.

All sample data is fictional.

## Evidence

The repository includes the GitHub Actions workflow, security tests and supporting evidence used in my CA2 report.

The report explains the pipeline, test results, limitations and how automated security testing can support software assurance.

## AI declaration

I have documented my use of AI assistance in the AI Fluency declaration included in my CA2 report.
