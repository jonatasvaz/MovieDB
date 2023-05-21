 import { useState,useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard"
const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;
 import './MoviesCard.css'
import MyLoader from "../components/Load";

const Search=({search})=>{
    const [searchParams] =useSearchParams()
    const[movies,setMovies]=useState([])
    console.log(movies)
    const query=searchParams.get('q')
          console.log(search)

         const getSearch=async (url)=>{
            const res= await fetch(url)
         .then((data)=>{
            setMovies(data)
            console.log(data)
         })
          .catch(err=> console.log(err)) 
      }
      useEffect(()=>{
      
        const topRatedUrl = `${searchURL}?${apiKey}&query=${search}`;
         getSearch(topRatedUrl)
},[query])

    return(
        <div  className="container">
        <h2 className="title">resultados para: {query}</h2>
     <div  className="movies-container"> 
    
     {
        <MyLoader/>
     }

    {movies.length>0  && movies.map((movie)=>
    <MovieCard key={movie.id} movie={movie}/>
  
    )}
    </div>   
    </div>
    )
}

export default Search