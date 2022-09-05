import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app = firebase.initializeApp({
    apiKey: process.env.React_APP_FIREBASE_API_KEY,
  authDomain: process.env.React_APP_FIREBASE_AUTH_DOMAIN,
  projectId: "notflix-auth-a10cd",
  storageBucket: "notflix-auth-a10cd.appspot.com",
  messagingSenderId: "281457306196",
  appId: "1:281457306196:web:d1b80d27b17609e9551bc1"
})