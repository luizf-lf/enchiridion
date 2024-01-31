# 📱 RN Playground

## About

An app with the sole purpose of serving as a "Playground" for me to study about React Native.

This app contains some mini applications built using features and APIs from react-native and Google Firebase.

What has been built so far:

- **User profile** It uses the **Authentication** module from Firebase, alongside the **Storage** module to store the user profile picture.
- **To-do List** - It uses the **Firestore** database to store user data, with real time updates, and the **Storage** module to store pictures from the itens on the to-do list. All data is related to the currently logged user.
- **Quotes** - A simple app to demonstrate the use of REST APIs inside the React Native app. It uses the Quotable API to fetch a single quote daily, and then caches it locally using local storage.
- **Webview** - A simple webview container to demonstrate the use of webview inside the app.

## Running the App

> 🔥 This app requires a Firebase project.

Before running this app, you need to configure a firebase project.

The project must have the `Authentication`, `Storage` and `Firestore` modules enabled in order for the app to work.

The `authentication` module must have the **e-mail provider enabled**.

After setting up the project on Google Firebase, download the `google-services.json` file, and place it under `/android/app/`.

After that, you can use the following commands available from the `package.json` file to run the app:

1. Run the Metro server:

   ```bash
     yarn start
   ```

2. Build the app in debug mode (Android)

   ```bash
     yarn android
   ```

   Optionally you can just hit `a` after starting the metro server to open the app on android.
