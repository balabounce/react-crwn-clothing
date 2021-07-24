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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) {
        return;
    }

    const userRef = firestore.doc(`/users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;