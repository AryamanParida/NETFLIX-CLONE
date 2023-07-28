import React, { useEffect } from 'react';

import './App.css';
import HomeScreen from "./screens/homescreen";


// INSIDE THE APP WE ONLY HAVE 1 SCREEN GOMESCREE --> NETFLIX SSCRREN --> localhost:3000

// BUT WHAT WE WANT IS TO HAVE SEPARATE SCREEN 
// PROFILE SCREEN --> localhost:3000/profile

// IN ORDER TO HAVE DIFFERENT PAGES IN WEBSITE (MADE USIN REACT JS )WE HAVE SOMETHING CALLED AS ROUTER

import 
{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';



//IF WE DONT HAVE  A USER THAT IS SIGNED IN THEN WE WILL DIRECT HIM TO THE LOGIN PAGE SUPPOSE THERE IS  A USER NULL. 
//NOW IF WE HAVE NO USER THEN RENDER THE LOGIN SCREEN ELSE RENDER THE HOMESCREEN


import {auth} from "./firebase";


import { useDispatch, useSelector } from 'react-redux';
import {login,logout, selectUser} from "./features/userSlice";

import ProfileScreen from './screens/ProfileScreen';
function App() {

   /* USER NULL ==> no user  SO LOGINSCREEN*/
  // const user =null; 
  ///INSTEAD OF HARDCODED VALUE WE WILL USE SELECTOR
  //NOW USER IS DISPATCHED INTO STORE SO HOW DO WE GET VALUE ==> WE USE SELECTOR THAT WE CAME ACRSOOS IN userslice.js

  const user=useSelector(selectUser);

  //  SOME USER IS THERE SO NOW IT WILL RENDER HOMESCREEN
  // const user={
  //   name:"Aryaman"
  // }

  //THIS USE EFFECT WAS DONE AFTER MAKING CHANGES IN the 2 functions register and signin in SignUpScreen.js 
  // THIS WILLLISTEN TO USERS LOGIN STATE  .  IT WILL HAVE A FUNCTION IN IT WE HAVE GIVEN [] SO IT WILLL RUN ON MOUNT

  //THE WAY WE USE DISPATCH IS USING A HOOK AND GETTING A DISPATCH OBJECT  
  const dispatch=useDispatch();
  useEffect(()=>
  {
    // IT LISTENS TO ANY AUTHENTICATED STATE CHANGE . IN FIREBASE EVEN IF U LOG IN AND U  REFRESH  IT WILL STORE IT IN UR LOCAL MEMORY. SO IT WILL BASICALLY GO AHEAD AND POP IN A COOKIE AND IT KNOWS THAT U ARE LOGGED IN FROM BEFORE
    //SO onAuthStateChanged gives us a userauth callback
    
    
    // /LOGGED OUT WE DISPATCH
    //WHEN IT DETECTS SOME ONE HAS LOGGED IN REMEMBER THE USER PIECE OF STATE, WE ARE GOING TO FIRE THAT USER OBJECT INTO THE STATE SO  NOW WE CAN ACEESS USER FROM ANYWHERE  INSIDE MY APP 
    //THE WAY WE GO AND MANIPULATE THE STATE IS WE DISPATCH SOMETHING INTO IT. DISPATCH A LOGIN/LOGOUT ACTION 

    //THE WAY WE USE DISPATCH IS USING A HOOK AND GETTING A DISPATCH OBJECT  SEEE UP WE HAVE DONE THAT

    

    const unsubscribe=auth.onAuthStateChanged(userAuth=>{
      if(userAuth)
      {
        //MEANS U ARE LOGGED IN 
        
        // console.log(userAuth);

        //WHEN WE ARE LOGGED IN IT WILL PUSH USER INTO STORE 
        //userAuth object had bunch of things(user id , email,DIPLAY NAME) we saw that using console log .
        //WE NEED TO CAPTURE THESE THINGS AND USE THEM. 
        //in login we need to pass a payload AND PAYLOAD IS BASICALLY WHAT WE ARE GOING TO SET THE USER TO 

        //WE ARE GOING TO DISPATCH AN OBJECT INTO REDUX STORE
        dispatch(login({
          uid:userAuth.uid ,
          email: userAuth.email,
        }))
      }
      else
      {
        //MEANS U ARE LOGGED OUT

        dispatch(logout()); //// what LOGOUT DOES IS IT RESETS USER TO NULL MAKES USER:NULL THAT IS WHAT HAPPENS IN WHEN WE LOGOUT THE USE SHOULD BECOME NUKK
      }
    });
    //WHENEVER U USE useEffect u should have clean up function. 
    //WHEN WE ARE DOING THIS auth.onAuthStateChanged ==> WHEN WE ARE SETTING THIS LISTENER UP WE ARE TAKING UP A BIT OF MEMORY OF OUR BROWSER WHICH TAKES UP SOME COMOUTING POWER 
    //IF COMPONENT WAS EVER TO UNMOUNT WE DONT WANT OT DUPLICATE ANOTHER LISTENER  ..  WE JUST WANT TO DETATCH OLD ONE AND ATTATCH A NEW ONE

    //return unsubscribe is equivlaent of saying is when it cleans up run the unsubscribe function  return()=>{unsubscribe()} .THAT MEANS OUR PERFORMANCE IS NOT AFFECTED.
    return unsubscribe;
  },[dispatch]) //SINCE ITS DEPENDED ON DISPATCH FUNCTION U PUT IT INSIDE THIS 
  return (
    <div className="app">
    {/* <h1>BUILDING NETFLIX</h1> */}
     {/* <HomeScreen/> PUTTING THIS IN ROUTE */}

     {/* ROUTER IS JUST GONNA LOOK AT THE PAGE ROUTE THAT YOU ARE ON AND DETERMINE BASED ON WHATEVERS INSIDE OF THIS SWITCH SO SWITCH IS JUST DETERMINING WHERE TO SEND THE  COMPONENTS/WHAT COMPONENTS TO RENDER */}

     {/*  SO  SUPPOSE WE ARE AT <Route path="/about">THIS WILL RENDER  WHATEVER IS INSIDE ABOUT COMPONENT
          <Route path="/about">
            <About />
          </Route>*/}

          {/* 
          NOW THIS IS THE ROUTE FOR THE MAIN SCREEN //OUR HOME SCREEN
          
          <Route path="/">
            <Home />
          </Route> */}

{/*          
NOW IF WE HAVE NO USER THEN RENDER THE LOGIN SCREEN ELSE RENDER THE HOMESCREEN */}

     <Router>
      {
      !user?
      (<LoginScreen/>):
      (<Routes>

        <Route path='/profile' element={ <ProfileScreen/> }/>
        {/* <Route  path="/test" element={<h1>HELLO</h1>}/> */}
        <Route exact path="/" element={<HomeScreen/>}/>
        </Routes>

      )
      }
        
    </Router>
    </div>
  );
}

export default App;


// WHAT WE WILL DO IS PUT ALL SCREENS IN A DIFFERENT FOLDER 




//NOW REDUX IS A GLOBAL STORE . WHEN WE HAVE AN APPLICATION WE HAVE COMPONENETS INSIDE IT , RATHER THAN PROP DRILLING AND PASSING VALUES DOWN FROM 1 COMPONENT TO ANOTHER TO ANOTHER  WE GET INTO PROBLEM WE ARE GETTING ITS CALLED PROP DRILLING WE DONT WANT TO DO THAT 

//INSTEAD WHEREVER WE ARE IN OUR APP WE MIGHT WANT TO GET ACCESS TO A VARIABLE FOR EXAMPLE THE user and then WHEREVERELSE WE ARE IN THE APP WE WANT TO  BASICALLY GET THAT USER. WE CALL THIS GLOBAL STORE AND THATS WHERE REDUX COMES IN ITS GLOBAL STORE OF OUR APPLICATION 

// go to apps folder and Store.js 


//WE CHANGE from counter to user 
//counterSlice to userSlice

//counterSlice.js to userSlice.js 
// NOW CHANGE ALL counter to user

//NOW WHAT IS userSlice.
//WE TALKED ABT GLOBAL STORE RATHER THAN HAVING A HUGE STORE WHERE WE DONT KNOW WHERE VERYTHING SITS
//WE CAN HAVE SLICES OF THE STORE EVERY SLICE CONTAINS DIFFERENT SECTIONS OF INFORMATION 

//SO IMAGINE WE HAD A USER SECTION AND A BASKE SECTION .. ALL USERS INFO GOES IN USER SECTON AND BASKET INFO GOES IN BASKET SECTON