# Meridian Expenses – Node.js / Express

This project was provided for the CCT PGDip Cybersecurity programme (September 2026 intake), as part of Secure Programming and Scripting CA1 (40%).

## Important: Deliberately vulnerable application

Meridian Expenses is a teaching application containing intentional security vulnerabilities. It is for local testing only and must not be deployed or exposed to a public network.

The application runs on `127.0.0.1` and uses fictional data. No real personal or financial information is included.

## About the application

Meridian Expenses is a basic staff expenses system. Users can log in, submit expense claims, view claims and download receipts. It includes staff, finance and administrator roles.

## Running the application

```bash
npm install
npm run seed
npm start
```

Open `http://127.0.0.1:3000` in your browser.

The seed command creates the sample database and receipts.

## Test accounts

| Username | Password | Role |
|---|---|---|
| `jdoe` | `password1` | Staff |
| `rsmith` | `letmein` | Staff |
| `achen` | `Summer2026` | Finance |
| `admin` | `admin` | Administrator |

These passwords are intentionally weak for testing purposes.

## Assessment requirements

The CA1 task is to identify at least six different security vulnerabilities, demonstrate how each can be exploited, explain the risks and apply suitable fixes.

Each finding should include practical evidence, such as a test request, response or screenshot. Similar issues caused by the same underlying weakness should not be counted as separate vulnerabilities.

The official assessment brief takes priority over this README.

## Testing restrictions

All security testing must be carried out on this application, on my own machine and through localhost only. No testing of CCT systems or third-party services is permitted.
