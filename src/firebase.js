import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
//FIRST JS SCRIPT MADE AFTER USING NPX REACT COMMAND 
// WE MAKE THIS FOR FIREBASE

const firebaseConfig = {
    apiKey: "AIzaSyBvsuRy2Ly-68-R1p4dTRpJ9pOhySMRgjw",
    authDomain: "netflix-clone-3e78c.firebaseapp.com",
    projectId: "netflix-clone-3e78c",
    storageBucket: "netflix-clone-3e78c.appspot.com",
    messagingSenderId: "323614918377",
    appId: "1:323614918377:web:af9473ba8ecf1fae575278"
  };

  //THE ABOVE IS THE KEY TO LOG IN FIREBASE

  //WE WILL INITIALIZE APP WUTH THE CREDENTIALS
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  // const fb=firebase.initializeApp()

  // firestore is the datbase we will be using . ITS AREAL TIME DATABASE
  // IT WILL ALLOW US TO KEEP A RACK OF WHT USERS SUBSCRIPTION IS OKAY

  const db=firebaseApp.firestore()

//FOR AUTHENTICATION WE USE THIS
  const auth=firebase.auth();

  //THIS IS EXPLICIT EXPORT U CAN HAVE MANY EXPLICIT EXPOTTS BUT ONLY 1 DEFAULT EXPORT
  export{auth};
  export default db;


  //NOW WE GO THE AUTHENTICATION STUFF ==> FOR THIS GO TO SIGN UP SCREEN
  // WE NEED TO  CAPTURE INFORMATION FROM THE SIGN IN SCREEN 