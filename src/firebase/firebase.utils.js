import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBI2zOxzdelHtz9OzxrYyzLF6ilMjG_Pho",
    authDomain: "crown-app-db-b84a6.firebaseapp.com",
    projectId: "crown-app-db-b84a6",
    storageBucket: "crown-app-db-b84a6.appspot.com",
    messagingSenderId: "810536465111",
    appId: "1:810536465111:web:507eb4aef52a279dbf3692"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;