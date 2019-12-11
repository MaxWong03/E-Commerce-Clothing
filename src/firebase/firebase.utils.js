import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAjIn9R71lMeC8Zj3t5GLsjcCW7s84aAeo",
  authDomain: "udemy-e-commerce-db.firebaseapp.com",
  databaseURL: "https://udemy-e-commerce-db.firebaseio.com",
  projectId: "udemy-e-commerce-db",
  storageBucket: "udemy-e-commerce-db.appspot.com",
  messagingSenderId: "308795957749",
  appId: "1:308795957749:web:12d5c9c4cbb5d8e34480bc",
  measurementId: "G-TF1WZ2HX5Q"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  /**
   * userRef is a Query Reference Obj
   * which you do CRUD action
   */ 
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  /**
   * snapShot is a Query Snapshot
   * which gives you the data you are looking for
   */
  const snapShot = await userRef.get();

  if (!snapShot.exist) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (err) {
      console.log('error creating user', err.message);
    }
    return userRef;
  }
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;