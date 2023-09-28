import React from 'react'
import "./navbar.css"
import logo from "./logo.jpg"
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
     <Link to="/"><img src={logo} alt="" className='logo'/></Link>
     <Link to="/movies/popular" className='subhead'>Popular</Link>
     <Link to="/movies/upcoming" className='subhead'>Upcoming</Link>
     <Link to="/movies/top_rated" className='subhead'>Top Rated</Link>
    </div>
  )
}

export default Navbar
