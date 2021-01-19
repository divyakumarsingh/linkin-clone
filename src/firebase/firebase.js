import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDdhoSyQhE-Fc_B5KMiqQGXbSQYUqTUrZY",
    authDomain: "linkedin-clone-ba0b5.firebaseapp.com",
    projectId: "linkedin-clone-ba0b5",
    storageBucket: "linkedin-clone-ba0b5.appspot.com",
    messagingSenderId: "294162900449",
    appId: "1:294162900449:web:b3aff5f8178005b2899ea0",
    measurementId: "G-4MJYZ0ETZY"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebaseApp.auth();


export { db, auth };