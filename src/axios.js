// very good library for making requests to server

// suppose our frontend which is netflix
//now we have tmdb at backend
//now we want data from tmdb
//netflix makes request to tmbd using api provided by tmdb.so netflix asks for movies and tmdb gives movies
//in order to use api we need the key that we got from tmdb

import axios from 'axios';

//initializing axios ///what this does is whenever we make a request we actually already append beginning url . 
//so instead of doing www.google.com/xyz
//or www.google.com/abc ==> instead of taking www.google.com every single time we can just add www.google.com in axios instance and every time we make a request it alwyas goes through google

// AS U CAN SEE https://api.themoviedb.org/3 THIS IS THE COMMON PART IN ALL WE JUST USE / AND MAKE REQUESTS WE WANT
//https://api.themoviedb.org/3/genre/tv/list
//https://api.themoviedb.org/3/genre/movie/list
//https://api.themoviedb.org/3/movie/changes

const instance=axios.create({
    baseURL:"https://api.themoviedb.org/3"

});
export default instance;