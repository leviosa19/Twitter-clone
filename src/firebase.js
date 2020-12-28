import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA-nPl-WVJGOePlXGtbnQYMiiOXMmCNh70",
    authDomain: "twitter-clone-f1a34.firebaseapp.com",
    databaseURL: "https://twitter-clone-f1a34.firebaseio.com",
    projectId: "twitter-clone-f1a34",
    storageBucket: "twitter-clone-f1a34.appspot.com",
    messagingSenderId: "750161375606",
    appId: "1:750161375606:web:85ab254316d92fb3128a57",
    measurementId: "G-G3SF953SNV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()


export {auth, provider}
export default db