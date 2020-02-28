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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    // If the user is not logged in
    if (!userAuth) return;

    // Query in firestore to check if user exits
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    // Check if user exits and if not, create it
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (err) {
            console.log("error creating user ", err.message);
        }
    }

    return userRef;
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
