import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD7rAQjk13UEeGSSTyfbnBn-4u-DelUapI",
    authDomain: "facebook-clone-25972.firebaseapp.com",
    projectId: "facebook-clone-25972",
    storageBucket: "facebook-clone-25972.appspot.com",
    messagingSenderId: "959308424352",
    appId: "1:959308424352:web:5d52545f34b433acb3d5c5",
    measurementId: "G-LLRTPHPZ22"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();


export {
    auth,
    provider
};
export default db;