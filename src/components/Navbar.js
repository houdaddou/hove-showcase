import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <img src={'/hove.jpg'} alt="h"></img>
        <div className="links">
            <Link to="/">ACCEUIL</Link> 
            <Link to="/">NOS SOLUTIONS</Link> 
            <Link to="/about">QUI SOMMES-NOUS?</Link>
            <Link to="/projects">ACTUALITES</Link>  
            <Link to="/projects">CONTACT</Link>   
            <Link to="/projects">RELEASE NOTES</Link>                          
        </div>
    </nav>
  )
}
