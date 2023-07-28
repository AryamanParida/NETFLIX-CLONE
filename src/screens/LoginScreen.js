import React, { useState } from 'react'
import "./LoginScreen.css";
import"./SignUpScreen";
import SignUpScreen from './SignUpScreen';
function LoginScreen() {

    // WHEN WE CLICK SIGN IN IT SHD FLIP  A PIECE OF STATE AND INSTEAD OF RENDERING THIS IT WILL RENDER SIGN UP KIND OF VIEW 
    const[signIn,setSignIn]=useState(false);//INITIALLY NOT SIGNED IN SO DEFAULT AS FLASE

    // ALSO WE WANT SIGN IN SCREEN WHEN WE CLICK IT OTHERWISE WE WANT OUR USUAL LOGINSCREEN BODY SO WE WILL CONDITION RENDER IT 

  return (
    <div className='loginscreen'>
              <div className="loginscreen_background">
                <img 
                className='loginscreen_logo'
                src=" https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png " 
                alt="" />

                <button className='loginscreen_button'
                onClick={()=>setSignIn(true)}>
                Sign In
                </button>
                <div className="loginscreen_gradient"/>
              </div>
              <div className="loginscreen_body">
                {signIn ?
                (<SignUpScreen/>):
                ( <>
                    <h1>Unlimited films,Tv Programmes and more.</h1>
                    <h2>Watch anywhere.Cancel at anytime</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership</h3>
    
                    <div className="loginscreen_input">
    
                        <form >
                        <input type="email" placeholder="Email Address"/>
                        <button className='loginscreen_getstarted'
                         onClick={()=>setSignIn(true)}>
                        GET STARTED
                        </button>
                        </form>
                    </div>
                    </>
                 )
                }
                
              </div>
    </div>
  )
}

export default LoginScreen
// SEE EARLIER WHEN WE DIDNT HAVE DIV CONTAINING THIS CLASS, WE DIDNT GET THE BACKGROUND IMAGE BUT NOW AFTER THIS WE GET BCOZ
// height property of the .loginscreen class was set to 100%, but since there was no parent container with a specified height, it resulted in the div element collapsing to a height of 0. Therefore, the background image was not visible.