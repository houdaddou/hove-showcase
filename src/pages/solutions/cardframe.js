import React from 'react'
import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Fab from '@mui/material/Fab';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import * as classes from './style.module.css';



export default function Cardframe({ parentData, content }) {


  if (content) {
    const textColor = parentData.textColor;
    const textStyle = {
      width: 262,
      color:  textColor,
      opacity: 0.7,
    }
    const styleObj = {
      "&:hover": {
        backgroundColor: "transparent"
      },
      "&:active": {
        backgroundColor: "transparent"
      }
    };
  return (
      <CardMedia image={parentData.background} className={classes.CardBackground}>
      <CardContent>
        <Typography sx={{
          width: 262,
          color: '#FFFFFF',
          marginBottom: 5,
          }} 
          variant="h5" 
          component="div">
          {content.title}
        </Typography>
        <Typography sx={textStyle} variant="body2">
            {content.text}
        </Typography>
      </CardContent>
      <CardActions>
      <Button disableRipple sx={styleObj}>         
      < img src={parentData.redirectIcon} alt="" />
      </Button>
        {/* <Fab  aria-label="add">
          <ArrowForwardIcon />
        </Fab> */}
      </CardActions>
    </CardMedia>
  )
}
}
