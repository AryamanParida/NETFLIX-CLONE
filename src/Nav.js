// HERE WE ARE MAKING THE NAV BAR COMPONENET

import React, { useState,useEffect } from 'react';
import "./Nav.css";
// import {useHistory} from "react-router-dom";
import { useNavigate } from  "react-router-dom";
function Nav() {

    const[show,handleShow]=useState(false);

    //to navigate using react route 
    const navigate=useNavigate();
    const transitionNavBar=()=>{
        if(window.scrollY> 100)
        {
            handleShow(true);
        }
        else
        {
            handleShow(false);
        }
    }

    //code will only run when the component runs
    useEffect(()=>{
        //everytime we scroll we gonna listen to the event and we triiger the transition nav bar function
      window.addEventListener("scroll",transitionNavBar);
      
      //clean up

      return ()=>window.removeEventListener("scroll",transitionNavBar);
    },[]);
  return (
    // <div className='nav nav_black'>
    //only renders navblack class when show variable is true
    <div className={`nav ${show && "nav_black"}`}> 
        <div className="nav__contents">
        {/* NETFLIX IMG */} 
        <img 
        onClick={()=>{navigate("/")}}
        className='nav_logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />

        {/* AVATAR IMAGE  */}
        <img
        //WITH BELOW U CAN GO TO PREV PAGE 
        onClick={()=>{navigate("/profile")}}
        //WITH BELOW U CANT GO TO PREVIOUS PAGE
        // onClick={()=>{navigate("/profile", {replace: true})}}
        
        className='nav_avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
        </div>

    </div> 
    );
}

export default Nav;
