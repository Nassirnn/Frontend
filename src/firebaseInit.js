import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCgBr1YaZsZ_PczYuq8x8CpTO_6yvangVs",
    authDomain: "ccsystems-7f10e.firebaseapp.com",
    projectId: "ccsystems-7f10e",
    storageBucket: "ccsystems-7f10e.appspot.com",
    messagingSenderId: "380029751782",
    appId: "1:380029751782:web:57020be7fb5eb6f0418627",
    measurementId: "G-BLPZGB9FGM"
  };

  export default firebase.initializeApp(firebaseConfig);