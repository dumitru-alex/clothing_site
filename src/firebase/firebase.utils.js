import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyBlxtPqxggHiunhI56U9zvMSBhINWSHFek",
    authDomain: "clothing-store-db-34edb.firebaseapp.com",
    databaseURL: "https://clothing-store-db-34edb.firebaseio.com",
    projectId: "clothing-store-db-34edb",
    storageBucket: "clothing-store-db-34edb.appspot.com",
    messagingSenderId: "255545658145",
    appId: "1:255545658145:web:4f66a711fcbbaec220cc60",
    measurementId: "G-KV4RC6BP1H"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// set the provider to be Google from the authentication library
const provider = new firebase.auth.GoogleAuthProvider();
// set custom param to always trigger the Google popup whenever we use this Google auth provider for auth and sign in
provider.setCustomParameters({ prompt: "select_account" });
// export a function that has the Google provider asigned to the popup
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
