import { getFirestore } from "firebase/firestore"
import * as firebaseui from "firebaseui"
import "firebaseui/dist/firebaseui.css"
import firebase from "firebase/compat/app"
const { REACT_APP_FIREBASE_API_KEY } = process.env;
const { REACT_APP_FIREBASE_AUTH_DOMAIN } = process.env;
const { REACT_APP_FIREBASE_PROJECT_ID } = process.env;
const { REACT_APP_FIREBASE_STORAGE_BUCKET } = process.env;
const { REACT_APP_FIREBASE_MESSAGING_SENDER_ID } = process.env;
const { REACT_APP_FIREBASE_APP_ID } = process.env;
const { REACT_APP_FIREBASE_MEASUREMENT_ID } = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: REACT_APP_FIREBASE_APP_ID,
  measurementId: REACT_APP_FIREBASE_MEASUREMENT_ID
}

export const app = firebase.initializeApp(firebaseConfig)

export const createUI = () => {
  const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth())
  ui.start(".firebase-auth-container", {
    signInOptions: [
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        requireDisplayName: false,
      },
    ],
    signInSuccessUrl: "/",
  })
}

export const db = getFirestore(app)