# Harmony Collective Form Infrastructure

This CDK app provisions a small serverless backend for the booking + contact forms:

- **Amazon SES** sends the email (you must verify the sender/recipient).
- **AWS Lambda** receives the form payload and formats the message.
- **Amazon API Gateway** exposes a `/forms/submit` endpoint with CORS enabled for the web app.

## Prerequisites

1. AWS account with permissions to use CDK, IAM, Lambda, API Gateway, and SES.
2. Node.js 20+ and npm.
3. Verified SES identity for the `recipientEmail`/`senderEmail`.
4. CDK bootstrapped in the target region (`cdk bootstrap aws://ACCOUNT/REGION`).

## Install dependencies

```bash
cd infra
npm install
```

## Configure context values

Update `cdk.json` or pass `--context` flags for:

- `recipientEmail`: address that receives the submissions (defaults to `hunter.j.adam@gmail.com`).
- `senderEmail`: optional; defaults to the recipient address. Must be verified in SES.
- `allowedOrigins`: array of origins that can call the API. Include `http://localhost:5173` for local dev and your production domain.

## Deploy

```bash
npm run synth   # optional: inspect CloudFormation template
npm run deploy  # creates/updates the stack
```

After deployment, note the `FormApiUrl` output and set `VITE_CONTACT_API_URL` in the front-end `.env`.

## Clean up

```bash
npm run destroy
```

This removes the API + Lambda (SES identities remain).

