import { Link } from 'gatsby'
import React from 'react'
import * as classes from './style.module.css';
import Button from '@mui/material/Button';


export default function Footer() {
    const styleObj = {
        "&:hover": {
          backgroundColor: "transparent"
        },
        "&:active": {
          backgroundColor: "transparent"
        }
      };
  return (
    <footer className={classes.Footer}>
        <div className={classes.ContentWrapper}>
            <Link>        
                <img className={classes.FooterLogo} src={'/logo-hove-white.png'} alt="h"></img>
            </Link>
            <div className={classes.Links}>
                <Link to="/">Rejoignez-nous</Link> 
                <Link to="">Confidentialité</Link> 
                <Link to="">Mentions légales</Link>
                <Link to="https://www.linkedin.com/company/hovedata/mycompany/verification/">
                    <Button disableRipple sx={styleObj}>
                        <img className={classes.LinkedInProfile} src={'/linkedin.jpg'} alt="" />
                    </Button>
                </Link>
            </div>
        </div>
    </footer>
  )
}
