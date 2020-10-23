import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAAj0amYBhcG7_R2v__z5VPj6RSCOyD52w",
    authDomain: "imessage-app-bd585.firebaseapp.com",
    databaseURL: "https://imessage-app-bd585.firebaseio.com",
    projectId: "imessage-app-bd585",
    storageBucket: "imessage-app-bd585.appspot.com",
    messagingSenderId: "377555463698",
    appId: "1:377555463698:web:efa0d3cde484252cc2f2cb",
    measurementId: "G-TMHG6HY4FR"
};

const FirebaseApp = firebase.initializeApp(firebaseConfig);

const db = FirebaseApp.firestore();
const auth = FirebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = FirebaseApp.storage();

export {auth,provider,storage};

export default db;