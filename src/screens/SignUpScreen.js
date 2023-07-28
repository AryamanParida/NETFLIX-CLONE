import React ,{ useRef }from 'react';
import "./SignUpScreen.css";
// import  from 'react';
import {auth} from "../firebase";
function SignUpScreen() {

  // AUTHENTICATION PORTION REGISTRATION  
  //WE DONT WANT TYPICAL REFRESH
  //ANYTIME  A BUTTON IS INSIDE FORM IT WILL TYPICALLY REFRESH TO PREVENT THAT WE GIVE e.preventDefault

  // WE NEED TO CAPTURE WHATS INSIDE EMAIL AND PASSWORD FROM SCREEN
  // WE HAVE A PIECE OF STTAE THAT TRACKS WHATS INSIDE EMAIL AND PASSWORD AND WE UPDATE AS USER TYPE 

  // BUT FOR MORE PERFORMANCE U CAN HAVE REFERNECE TO THAT FIELD
  //WE WILL HAVE emailref AND passwordref WHICH USES UseRef hook ==> IMAGINEIT LIKE A  BIG FINGER IS POINTING AT HTML ELEMENT SO THAT WE ARE GOING  TO DO HERE . WE INITIALIZED IT WITH null
  const emailref=useRef(null);
  const passwordref=useRef(null);

  //WHILE REGISTERING WE  WANT TO CREATE USERNAME WITH EMAIL AND PASSWORDS so auth.createUserWithEmailAndPassword ==> this takes in email value and password value so we gave emailref & passwordref as reference in input
   const register=(e)=>
   {
    e.preventDefault();

    //WHENEVER WE CLICK REGISTER BUTTTON WHAT WE WNAT TO DO IS CREATE AN ACCOUNT WITH USERS EMAIL AND PASSWORD 
      
    auth.createUserWithEmailAndPassword(emailref.current.value,passwordref.current.value)
    .then((authUser)=>{
      console.log(authUser);  // THIS WILL PRINT OUR LOG THE USER IN CONSOLE AND WE WILL GET A USER OBJECT.
    }).catch(error=>{
      alert(error.message);
    });
   };
   //AFTER ENETERING EMAIL AND PASSWORD AND CLICKING ON signup now . U CAN GO TO FIREBASE AND SEE IN USERS THAT THERE WILL BE THAT EMAIL
  //  IT WILL THROW ERROR IF U HAVE EMPTY FIELDS AND U TRY TO SIGN UP NOW Firebase: The email address is badly formatted. (auth/invalid-email).

  /// NOW WITH THIS WHEN U ENTER UR EMAIL AND PASSWOR DAND CLICK SIGN IN AND IF UR EMAIL PASSWORD IS THERE IN USER SECTION U WIOLL BE ABLE TO SIGN IN PROPERLY AND IT WILL GIVE USER BACK IN CONSOLE U CAN CHECK THERE
  // BUT IF ITSN'T THERE IT WILL THROW ERROR MESSAGE SO IF U GIVE WRONG PASSWORD IT WILL THROW ERROR SAYING WRONG PASSWORD . IF UR IUSER ISNT THERE IN FIREBASE IT WILL SAY  There is no user record corresponding to this identifier
   const signIn=(e)=>
   {
    e.preventDefault();

    auth.signInWithEmailAndPassword(emailref.current.value,passwordref.current.value).then((authUser)=>{
      console.log(authUser);
    }).catch(error=>{
      alert(error.message);
    })
   };

  return (
    <div className='signupscreen'>
      <form >
        <h1>Sign In</h1>
        <input type="email" placeholder='Email' ref={emailref}/>
        <input type="password"placeholder='password' ref={passwordref} />
        <button type='submit' onClick={signIn}>Sign In</button>

        <h4>
          <span className='signupscreen_gray'>New to Netflix?</span>
          <span className='signupscreen_link' onClick={register}>Sign Up now.</span>  
        </h4>
      </form>
    </div>
  )
}

export default SignUpScreen


///NOW AFTER THIS OUR APP SHOULD KNOW THAT USER HAS LOGGED IN OR NOT 
// FOR THI WE WILL USE useEffect() in app.js  which will listen to users login state