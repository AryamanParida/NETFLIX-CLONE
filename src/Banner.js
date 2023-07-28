import React, { useState ,useEffect} from 'react';
import  './Banner.css';
import axios from "./axios";
import requests from "./Requests";
function Banner() {

    //fetch movie from tmdb database and store it and use it
    const[movie,setMovie]=useState([]); //look we are using movie varibale and we will change its value with setmovie, we are using usesetate hook and initialize it with empty array

    //we will use useEffect to fetch movie information
    useEffect(()=>{
        async function fetchData() //responsible for fetching the movie thats going to show on banner image
        {
            const request = await axios.get(requests.fetchNetflixOriginals);
            //now setmovie will go make request and request will come back here 
            setMovie(
                request.data.results[
                    Math.floor(Math.random()*request.data.results.length-1)]//this is a random number which will be  from 0 to length of results that come back.SO IMAGINE THAT THERE ARE 100 VIDEOS THAT CAME BACK SO A NUMBER BETWEEN 0 TO 100 WILL BE PUT IN request.data.results.length-1. THEN SETMOVIE WILL SET IT TO THAT MOVIE
            );
            //ITS A GOOD PRACTIC TO RETURN THE REQUEST EVEN IF WE ARE NOT DOING ANYTHING.ITS GOODB BCOZ IT COMPLETELY CLOSES THE PROMISE CHAIN
            return request;
        }
        fetchData();
    },[]) ; //we have empty dependency array so it only fires code when banner component mounts

    //GO TO CONSOLE IN UR BROWSE AND U WILL SEE THE MOVIE NAME AND OTHER THAT COME WITH IT. IT WILL BE RANDOM EVERY TIMR
    // console.log(movie);

    // IF DESCRIPTION IS LONG WE WANT IT TO TRUNCATE AND AFTER SOME CHARECTER GIVE ...
    function truncate(string,n)
    {
        //checks if string is there if there then if string.length>n then returns substring of string from index 0 to n-1 with ...
        // otherwise returns the string
        return string?.length>n?string.substring(0,n-1)+'....':string;
    }
  return (
    <header 
    className='banner' 
    style={{
        // backgroundImage:`url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_fla/originalg.svg.png")`,
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        // INITIALLY MOVIE WILL NOT BE DEFINED so we USED movie? AFTER THAT WE KNOW MOVIE IS ARRAY AND WHEN WE DID CONSOL.LOG MOVIE WE HAD A COMPONENT THERE CALLED BACKDROP_PATH WHICH WOULD GIVE US THE MOVIE IMAGE // https://image.tmdb.org/t/p/original/ ==> THIS IS THE COMMON PART FOR ALL
        backgroundPosition:"center center",
        backgroundSize:"cover",
        
        }}>
      
      <div className="banner_contents">
        {/* <h1 className="banner_title">MOVIE NAME</h1> */}
        {/* WITH BELOW WE WILL GET MOVIE NAME  IT WILL USE ANY OF THE THREE BUT IN THIS PRECEDENT FIRST movie?.title then if its not there movie?.name if its not there movie?.original_name WE GO THIS FIELDS USING THE CONSOLE LOG ABOVE WE SAW THE CONSOLE IN THE BROWSER  */}
        <h1 className="banner_title">{movie?.title||movie?.name||movie?.original_name}</h1>
        <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
        </div>

        {/* <h1 className="banner_description">
            {truncate(`This is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test description`,157 )}</h1> */}
            
            {/* NOW WE DONT NEED THE ABOVE WE CAN HAVE MOVIE OR TV DESCRIPTION using movie variable */}

            <h1 className="banner_description">
            {truncate(movie?.overview,155 )}</h1>
      </div>

      <div className="banner--fadeBottom" />

    </header>
  )
}

export default Banner
