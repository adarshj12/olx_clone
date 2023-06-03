import firebase from "firebase";
import 'firebase/auth' 
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAHy7qC8VfBdIOgy1fjEW99R6CkJqO63hM",
    authDomain: "fir-97443.firebaseapp.com",
    projectId: "fir-97443",
    storageBucket: "fir-97443.appspot.com",
    messagingSenderId: "43802445498",
    appId: "1:43802445498:web:f931ba70b0fd5856822483",
    measurementId: "G-JPLK919BGM"
  };

 export default firebase.initializeApp(firebaseConfig)