import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithRedirect, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Initializing Firbase: User Auth + Firestore
// SignIn and SignOut Functions

export const initializeFirebase = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyA7DZakhbXMEo5vY-OTAOwj7oUJb5uJN6k",
        authDomain: "mira-6cca9.firebaseapp.com",
        projectId: "mira-6cca9",
        storageBucket: "mira-6cca9.firebasestorage.app",
        messagingSenderId: "430327845549",
        appId: "1:430327845549:web:5fa0457dc509f5fe476c24",
        measurementId: "G-RKBSFBDNL8"
        };

  const app = initializeApp(firebaseConfig);
  return app;
}

export const getUserAuth = (alreadyInit: boolean) => {
  if (!alreadyInit) {
    const app = initializeFirebase();
  }
  const auth = getAuth();
  return auth;
}

export const getFireStore = (alreadyInit: boolean) => {
  if (!alreadyInit) {
    const app = initializeFirebase();
  }
  const firestore = getFirestore();
  return firestore;
}

export const signIn = () => {
  const auth = getUserAuth(false);
  const provider = new GoogleAuthProvider();
//   signInWithRedirect(auth, provider);
  signInWithPopup(auth, provider);
}

export const signOut = () => {
  const auth = getUserAuth(false);
  auth.signOut();
}