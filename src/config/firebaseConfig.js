import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
 
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyBxRTiasrUj5JxXYxSTRIRAPAhEHhhry2I",
    authDomain: "sure-8044b.firebaseapp.com",
    databaseURL: "https://sure-8044b.firebaseio.com",
    projectId: "sure-8044b",
    storageBucket: "sure-8044b.appspot.com",
    messagingSenderId: "265855395147"
  };
firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots:true})

export default firebase;