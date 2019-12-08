import firebase from "firebase/app";
import "firebase/firestore";

if (!firebase.apps.length) {
  const config = {
    apiKey: "AIzaSyCNR_wV_Rq-rDk_iYJ-oa9qXHE3toGLc70",
    authDomain: "mijnticenik.firebaseapp.com",
    databaseURL: "https://mijnticenik.firebaseio.com",
    projectId: "mijnticenik",
    storageBucket: "mijnticenik.appspot.com",
    messagingSenderId: "828248417629",
    appId: "1:828248417629:web:581f930b8a8bf88b",
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });
}
const fireDb = firebase.firestore();
export { fireDb };
