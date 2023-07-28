import React, { useEffect,useState } from 'react'
import "./Row.css";
import axios from "./axios"

function Row({title,fetchUrl,isLargeRow=false}) {
    //we will have  a varibale which will contain the movies
    const[movies,setMovies]=useState([]);

    useEffect(()=>{
        async function fetchData()
        {
            const request=await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request; //async return something always. THIS 2 ABOVE LINES WILL GIVE MOVIES AS RESULT
        }
        fetchData();
    },[fetchUrl]);

    // console.log(movies);//WHEN U GO IN CONSOLE AND SEE THE ARRAY U WILL SEE THAT EACH OBJECT INSIDE ARRAY HAS DIFFERENT FIELDS. WE SAW THAT EACH HAVE backdrop_path and poster_path

    //NOW WE WILL GO AND RENDER OUT EACH POSTER (LINE 27)
    const base_url="https://image.tmdb.org/t/p/original/";
  return (
    <div className='row'>
        {/* <h2>This is title</h2> */}
      <h2>{title} </h2>

 {/* We will iterate through the movies and return image*/}

 {/* IF ITS A LARGE ROW(BIG ROW) THEN WE USE POSTER PATH OTHERWISE WE USE BACKDROP_PAATH IF ITS A SMALL ROW*/}

 {/* WE GAVE IT AN ADDITIONAL CLASS IF IT WAS  A LARGE ROW . SO WE APPLY THE CLASS row_posterLarge IF WE PASS IN THAT PROP isLargeRow*/}

 {/*  THERE ARE FEW GOOD PRACTICES WE SHOULD DO EVERY TIME WE ARE RENDERING A BUNCH OF THINGS WE SHOULD ALWAYS PASS I THE KEY IN THIS CASE IT IS GOING TO BE  movie.id (IT COMES WITH id we saw it in console.log)  WE ARE GOING TO USE THIS KEY TO KEEP THINGS CLEAN AT THIS POINT */}
    
    {/* NOW WE COULD HAVE DEADLINK DUE TO WHICH WE THERE WOULD BE NOPICTURE ICON IN OUR ROW TO AVOID THAT WE PUT CONDITION */}
    <div className="row__posters">
        {movies.map(movie=>(

          ((isLargeRow && movie.poster_path)||
          (!isLargeRow && movie.backdrop_path))&&(
          <img 
          className={`row_poster ${isLargeRow && "row_posterLarge"}`}
          key={movie.id}
          src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`} 
          alt={movie.name} />)
      ))}
    </div>
      
    </div>
  );
}

export default Row;
