  import firebase from 'firebase/app';
  import 'firebase/storage';
  import 'firebase/firestore';

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyC0ZpFIEyma9oU9zxjKs9BJOgTagmUaptk",
    authDomain: "ajaa-spaceimageupload.firebaseapp.com",
    databaseURL: "https://ajaa-spaceimageupload.firebaseio.com",
    projectId: "ajaa-spaceimageupload",
    storageBucket: "ajaa-spaceimageupload.appspot.com",
    messagingSenderId: "1009189277425",
    appId: "1:1009189277425:web:26d4e6cd940b4889b0e350"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp; 

  export { projectStorage, projectFirestore, timestamp };