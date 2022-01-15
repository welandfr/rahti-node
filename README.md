# Simple Node-express REST API demo for use on CSC Rahti

## 1. On rahti.csc.fi Openshift Web Console:
- Create node-project on CSC Rahti (use your github repo)
- Set any environment variables you need, Builds/[your app]/Environment
- When the first build is complete, find the Webhook url (Builds/[your app]/Configuration)

## 2. On Github (setup push-to-deploy)
- Copy-paste the GitHub Webhook URL from Rahti to GitHub/Settings/Webhooks/New Webhook. 
- Set Webhook Content type to application/json

### Note
- uses Node v10 as it's apparently the newest available on Rahti.
- Make sure your default branch is named `master` not `main`.
- Rahti wants your app to listen on port 8080