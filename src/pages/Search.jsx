 import { useState,useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard"
const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;
 import './MoviesCard.css'

const Search=()=>{
    const [searchParams] =useSearchParams()
    const[movies,setMovies]=useState([])
    const query=searchParams.get('q')
          //console.log(movies)

         const getSearch=async (url)=>{
            const res= await fetch(url)
            const data= await res.json()
            console.log(data)
            setMovies(data.results)
      }
      useEffect(()=>{
        const topRatedUrl = `${searchURL}?${apiKey}&query=${query}`;
    
         getSearch(topRatedUrl)
},[query])

    return(
        <div  className="container">
        <h2 className="title">resultados para {query}</h2>
     <div  className="movies-container"> 
     {!movies && <h1>carregando...</h1>}
    {movies.length>0  && movies.map((movie)=>
    <MovieCard key={movie.id} movie={movie}/>
  
    )}
    </div>   
    </div>
    )
}

export default Search