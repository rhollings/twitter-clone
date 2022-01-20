import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBrQNcHoVcE4PVhu87r_a0U34YOQeVwH7g",
    authDomain: "twitter-clone-99d97.firebaseapp.com",
    projectId: "twitter-clone-99d97",
    storageBucket: "twitter-clone-99d97.appspot.com",
    messagingSenderId: "290963294180",
    appId: "1:290963294180:web:c1f5302f924f4f2e5869f1",
    measurementId: "G-H75NQ18MJG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;