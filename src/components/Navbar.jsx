import { Link, useNavigate } from "react-router-dom"
import {BiCameraMovie,BiSearchAlt2}from'react-icons/bi'
import './Navbar.css'
import { useState } from "react"
import Search from "../pages/Search"
const Navbar=()=>{
  const[search,setSearch]=useState('')
  const [auth,setAuth]=useState(false)

   const navigate=useNavigate()

  console.log(auth)
  

   const handleSubmit=(e)=>{
       e.preventDefault()
       if(!search) return
       setAuth(true)
     navigate(`search?q=${search}`, { replace: true })
         setSearch('')
       
         setTimeout(()=>{
           setAuth(false)
         },1000)
   }

    return(
      <>
      <nav id="navbar">
           <h2>
            <Link to='/'>
             <BiCameraMovie/>   MoviesLib </Link>
           </h2>
           <form onSubmit={handleSubmit}>
            <input type='text' palcehold="busque filme" onChange={(e)=>setSearch(e.target.value)} value={search}/>
             <button type="submit"><BiSearchAlt2/></button>
             
           </form>
        </nav>
        { auth &&
             
             <Search search={search}/>
             
        }
       
    </>
        )
}

export default Navbar