import firebase from 'firebase/app';
// firestore: requirement for database
import 'firebase/firestore';
// auth: requirement for authentication
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBpkCYVl8czVBj8HiyZHZAmJIYD9k_LS7s",
    authDomain: "clothingstore-db-ed538.firebaseapp.com",
    databaseURL: "https://clothingstore-db-ed538.firebaseio.com",
    projectId: "clothingstore-db-ed538",
    storageBucket: "clothingstore-db-ed538.appspot.com",
    messagingSenderId: "742498261174",
    appId: "1:742498261174:web:5bf2585dacd8f8543b6e17",
    measurementId: "G-MP0R3XLGZV"
};


firebase.initializeApp(config);

// exporting authentication method
export const auth = firebase.auth();
// exporting database
export const firestore = firebase.firestore();

// google authentication 
const provider = new firebase.auth.GoogleAuthProvider();
// trigger google pop up for Google auth
provider.setCustomParameters({prompt: 'select_account'});
// this is trigger pop up for different auth, but in this case
// 'provider' is for google auth
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
