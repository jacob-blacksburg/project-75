import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDrZL_cWHb8_UiWeoB3WaOzCa9Jatw6Jao",
  authDomain: "eride-aba5e.firebaseapp.com",
  projectId: "eride-aba5e",
  storageBucket: "eride-aba5e.appspot.com",
  messagingSenderId: "889096074754",
  appId: "1:889096074754:web:94fb67005c9577ad3e191b"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
