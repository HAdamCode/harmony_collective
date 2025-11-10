# Harmony Collective Web

React + Vite single-page site highlighting the Harmony Collective ensembles, services, and contact information. The bundle is framework-driven and ready for AWS Amplify static hosting.

## Local Development

```bash
npm install        # one-time dependency install
npm run dev        # start Vite dev server (http://localhost:5173)
npm run build      # production build to dist/
npm run preview    # serve the build output for a final check
```

## Deploying to AWS Amplify

1. Push this repo to GitHub (or another supported provider).
2. In the Amplify console choose **Host web app → GitHub** and connect the repo/branch.
3. When prompted for build settings keep the defaults or provide:

   ```yaml
   version: 1
   applications:
     - appRoot: .
       frontend:
         phases:
           preBuild:
             commands:
               - npm ci
           build:
             commands:
               - npm run build
         artifacts:
           baseDirectory: dist
           files:
             - '**/*'
         cache:
           paths:
             - node_modules/**/*
   ```

4. Save and deploy—Amplify will run the build and host the static `dist/` output globally via CDN.
