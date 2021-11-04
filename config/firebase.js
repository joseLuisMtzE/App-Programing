import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import Constants from 'expo-constants';

const firebaseConfig = {
  apiKey: "AIzaSyDA9Uj6Pnp61fafaxOS5AdUjXyCQ9AWWS4",
  authDomain: "usersmail-47736.firebaseapp.com",
  projectId: "usersmail-47736",
  storageBucket: "usersmail-47736.appspot.com",
  messagingSenderId: "962602904642",
  appId: "1:962602904642:web:3e0652701f0ef2538a91db",
};
console.log(Constants.manifest);

let Firebase;

if (firebase.apps.length === 0) {
  Firebase = firebase.initializeApp(firebaseConfig);
}

export default Firebase;