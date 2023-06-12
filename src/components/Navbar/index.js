import { Link } from 'gatsby'
import React from 'react'
import * as classes from './style.module.css';


export default function Navbar() {
  return (
    <header className={classes.Header}>
        <div className={classes.ContentWrapper}>
            <Link>        
                <img className={classes.HeaderLogo} src={'/hove.jpg'} alt=""></img>
            </Link>
            <div className={classes.Links}>
                <Link to="/">ACCUEIL</Link> 
                <Link to="/solutions">NOS SOLUTIONS</Link> 
                <Link to="/about">QUI SOMMES-NOUS?</Link>
                <Link to="/projects">ACTUALITES</Link>  
                <Link to="/projects">CONTACT</Link>   
                <Link to="/projects">RELEASE NOTES</Link>     
            </div>
        </div>
    </header>
  )
}
