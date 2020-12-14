import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyA6691ONs5iVichyrXw-eVb93kqG3wMVHc",
    authDomain: "nyous-tarde.firebaseapp.com",
    projectId: "nyous-tarde",
    storageBucket: "nyous-tarde.appspot.com",
    messagingSenderId: "772871087957",
    appId: "1:772871087957:web:7fac0c9d221b9e82ac31dc"
};

const app = firebase.initializeApp(firebaseConfig);

//importo o firebase para poder utilizar nos componentes
export const db = app.firestore();
export const storage = app.storage();

export default firebaseConfig;