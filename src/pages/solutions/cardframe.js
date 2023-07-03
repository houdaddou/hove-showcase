import React from 'react'
import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import * as classes from './style.module.css';


export default function Cardframe({ parentData, content }) {


  if (content) {
    const textColor = parentData.textColor;
    const borderColor = parentData.borderColor;
    const backgroundColor = parentData.contentColor;
    const textStyle = {
      width: 262,
      color:  textColor,
      marginBottom: 5,
      fontWeight: 400,
      fontSize: 14
    }
    const titleStyle = {
      color:  textColor,
      fontWeight: 600, 
      fontSize: 20
    }
    const cardContentStyle = {
      border: borderColor, 
      borderTopRightRadius: 30,
      backgroundColor: backgroundColor, 
      borderTopLeftRadius: 30 
    }
    const styles = {
      cardcontent: {
        padding: 0,
        "&:last-child": {
          paddingBottom: 0
        }
      }
    };    
    const styleObj = {
      paddingBottom: 0,
      "&:hover": {
        backgroundColor: "transparent"
      },
      "&:active": {
        backgroundColor: "transparent"
      }
    };
  return (
      <div>
      <CardContent
        sx={cardContentStyle}
        >
          <div className={classes.ContentWrapper}>

                          <img src={content.icon} alt=""></img>    
        <p style={titleStyle}>
            {content.title}
        </p>
          </div>
      </CardContent>
      <CardContent
              style={{ border: "1px solid rgba(0, 40, 48, 0.1)", borderBottomLeftRadius: 30, borderBottomRightRadius: 30,      }}>        
          <Typography sx={textStyle} variant="body2">
            {content.text}
        </Typography>
      <CardActions>
      <Button disableRipple sx={styleObj}>         
      < img src={parentData.redirectIcon} alt="" />
      </Button>
      </CardActions>
      </CardContent>
      </div>
  )
}
}
