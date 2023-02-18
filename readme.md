# RN Playground

## About

A React Native app developed for self-learning.

## Running the App

> 🔥 This app requires a Firebase project.

Before running this app, you need to configure a firebase project.

The project must have the `Authentication`, `Storage` and `Firestore` modules enabled in order for the app to work.

The `authentication` module must have the **e-mail provider enabled**.

After setting up the project on Google Firebase, download the `google-services.json` file, and place it under `/android/app/`.

After that, you can use the following commands available from the `package.json` file to run the app:

1. Run the Metro server:

   ```bash
     $ yarn start
   ```

2. Build the app

   ```bash
     $ yarn android
   ```

   Optionally you can hit `a` after starting the metro server to open the app on android.
