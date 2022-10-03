import { setDoc, doc, collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import "firebaseui/dist/firebaseui.css"
import firebase from "firebase/compat/app"
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut} from "firebase/auth"

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

const app = firebase.initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const googleProvider = new GoogleAuthProvider()

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider)
    const user = res.user
    const q = query(collection(db, "users"), where("uid", "==", user.uid))
    const docs = await getDocs(q)
    if (docs.docs.length === 0) {
      await setDoc(doc(db, "users", user.email), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
        collection: [],
      })
    }
  } catch (e) {
    console.error(e)
  }
}

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (e) {
    console.error(e)
  }
}

const registerWithEmailAndPassword = async (name, email, password) => {
  
  let errorMessage

  await createUserWithEmailAndPassword(auth, email, password)
    .then ((res) => {
      const user = res.user
      setDoc(doc(db, "users", email), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
        collection: [],

      })
    })
    .catch(e => {
      errorMessage = e.code
    })

    return errorMessage
}

const sendPasswordReset = async (email) => {
  let errorMessage

  await sendPasswordResetEmail(auth, email)
    .catch(e => {
      errorMessage = e.code
    })

  return errorMessage
}

const logout = () => {
  signOut(auth)
}

export { 
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout
}

// export const createUI = () => {
//   const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth())
//   ui.start(".firebase-auth-container", {
//     signInOptions: [
//       {
//         provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
//         requireDisplayName: false,
//       },
//     ],
//     signInSuccessUrl: "/",
//   })
// }

