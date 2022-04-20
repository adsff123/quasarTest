// import { boot } from 'quasar/wrappers'
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// https://exerror.com/solved-export-default-imported-as-firebase-was-not-found-in-firebase-app/
// import firebase from 'firebase/app';
// import 'firebase/auth';
import "firebase/compat/analytics";
// import 'firebase/firestore'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
// export default boot(async (/* { app, router, … } */) => {
// something to do
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbzlb02X8rOWTilYY9asloeaeLjRYxP4Q",
  authDomain: "tutorial-209ec.firebaseapp.com",
  projectId: "tutorial-209ec",
  storageBucket: "tutorial-209ec.appspot.com",
  messagingSenderId: "944684836100",
  appId: "1:944684836100:web:62520261dd68fe64885c51",
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
firebase.analytics();

export const auth = firebase.auth(); // https://stackoverflow.com/questions/68381469/how-to-mount-quasar-app-to-dom-after-firebase-connection-is-initialized
export const db = firebase.firestore();
// })
