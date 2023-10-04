# Firebase Functions tutorial

## setting environment secrets
1. Generating environment sercrets:
- Generate from the projec dashboard:

https://console.firebase.google.com/u/2/project/<project_name>/settings/serviceaccounts/adminsdk?consoleUI=FIREBASE

## Setting the environment secrets from the console

2. Run: firebase functions:config:set private.key="YOUR API KEY" project.id="YOUR CLIENT ID" client.email="YOUR CLIENT EMAIL" where `id` and `email` are the environment secrets to use.

## Working with Firebase
