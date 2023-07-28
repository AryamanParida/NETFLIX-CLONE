import React from 'react'
import "./ProfileScreen.css"
import Nav from '../Nav'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
function ProfileScreen() {

    const user=useSelector(selectUser);
  return (
    <div className='profilescreen'>
      {/* <h1>This is the profileScreen</h1> */}
       {/* WE WANT TO RENDER THE NAV COMPONENT  WITH THIS U WILL HAVE THE NAV COMPONENT  NOW WHAT WE WANT IS WHEN WE CLICK NETFLIX LOGO WE GO TO HOMESCREEN SO GO TO Nav.js and do same what u did with avatar*/}
       <Nav/>

       <div className="profilescreen_body">
            <h1>Edit Profile</h1>
            <div className="profilescreen_info">

                <img  src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />

                <div className="profilescreen_details">
                    {/* IN THIS WE WANT THE EMAIL IN H2 TAG HOW DO WE GET EMAIL? ==> WE PUSHED THE USERS INFORMATION INTO REDUX TO FETCH IT WE USED SELECTOR WE WILL USE IT HERE*/}
                    <h2>{user.email}</h2>

                    {/* NOW WE WANT PROFILE SCREEN PLAN  */}
                    <div className="profilescreen_plan">

                        <h3>Plans</h3>
                        {/* AT END WE HAVE A SIGNOUT BUTTON  */}
                        <button 
                        // TO SIGNOUT WE USE AUTH OBJECT AND SIGNOUT WHEN WE CLICK ON SIGNOUT IT WILL GO AND SIGN OUT IT WILL TRIGGER OFF A LISTENER auth.onAuthStateChanged  AND NOW THERE IS NO userAuth so it will go and dispatch logout function which means user is null so it will throw ius back to loginscreen
                        onClick={()=>{auth.signOut()}}
                        className="profilescreen_signout">
                            Sign Out
                        </button>

                    </div>
                </div>
        
             </div>
       
        </div>
    </div>
  )
}

export default ProfileScreen

//WE WANT THAT WHEN WE CLICK ON THE AVATAR ON THE TOP RIGHT IT SHOULDD TAKE/NAVIGATE US TO PROFILE SCREEN
//SO GO TO NAV.JS  WHEERE U MADE THE AVATAR

// TO PROGRAMMICALY NAVIGATE WITH REACT ROUTER  
//WE WILL HAVE SOMETHING CALLED history

                //IMP
//With React router everytime u sort of change page you are esentilally pushing a new page in the history which is why when u click back button it goes back a page  ... U WILL USE HOOK ==> useHistory() OR useNavigate() in react v6
 
//WE CAN PROGRAMATTICALY PUSH THE NEXT PAGE INTO HISTORY STACK

//IN THE IMG OF AVATAR ==> onClick={()=>history.push("/profile")} OR onClick={()=>{navigate("/profile")}}

// SO NOW WHEN U CLICK PROFILE IT WILL TAKE U TO PROFILE AND WHEN U GP BACK BCOZ IT PUSHED ON TO HISTORY STACK  IT KNEW WHERE TO GO BACK TO WHEN WE POPPED OFF AND WENT BACK

// SO IT PUSHES THE PAGE WHEN WE CLICK ON IT AND IF WE GO BACK IT GOES BACK TO THE PREV PAGE  