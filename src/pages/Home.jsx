import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import "./MoviesCard.css";
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home=()=>{
      const[topMovies,setToprMovies]=useState([])
      console.log(topMovies)
    
     const getUrl=async (url)=>{
           const res= await fetch(url)
           const data= await res.json()
           setToprMovies(data.results)
     }
     useEffect(()=>{
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    
        getUrl(topRatedUrl)
     },[])

    return(
         <div  className="container">
            <h2 className="title">melhores filmes</h2>
         <div  className="movies-container"> 
       { !topMovies && <h1>carregando...</h1>} 
        {topMovies && topMovies.map((movie)=>
        <MovieCard key={movie.id} movie={movie}/>
      
        )}
        </div>   
        </div>
    )
}

export default Home