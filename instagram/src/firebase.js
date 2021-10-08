import firebase from "firebase";
require("firebase/firestore");
  
// Your web app's Firebase configuration
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDKtIPdAjdfLS-E_vbV51fApgvrU-jUt5o",
  authDomain: "instagram-clone-5bb73.firebaseapp.com",
  projectId: "instagram-clone-5bb73",
  storageBucket: "instagram-clone-5bb73.appspot.com",
  messagingSenderId: "992567785006",
  appId: "1:992567785006:web:c5f6fe0dcf974d7551d1bf"

});
  

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
