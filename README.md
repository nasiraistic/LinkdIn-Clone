# LinkdIn-clone

This project is clone of LinkdIn. It is developed using React.js and Redux for the frontend, and Firebase for the backend.

## Prerequisites

### Firebase

This project uses Firebase for user registration & authentication, database and deployment.

Go to <https://console.firebase.google.com/> </br>
Create a new project (preferably linked to a GCP account) </br>
Add an app to the project </br>
Create a file in src named `.env` and copy the `.env.template` into the file.

Go to project settings, and grab the Firebase SDK snippet, which looks like:

```
const firebaseConfig = {
  apiKey: "xxx",
  authDomain: "xxx",
  databaseURL: "https://xxx",
  projectId: "xxx",
  ...
}
```

Copy the credentials in `firebaseConfig` and paste them into the corresponding spots app in `.env`.

### GNews API

The application uses the GNews API to update the daily news section.
Go to <a href="https://gnews.io/">GNews</a> and create an account to access the API. After creating an account, you will receive an API token. Copy the token and paste it into the corresponding spot in `.env`.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.</br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.</br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.</br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.</br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
