import React from 'react'
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import * as classes from './style.module.css';



export default function Cardframe({ parentData }) {
  const test = "/navitia-frame.svg";
  // const t = parentData
  // const test2 = "/patterns-frame.svg"
  console.warn('here', parentData)

  return (
    <CardMedia image={parentData} className={classes.CardBackground}>
    <CardContent>
      <Typography variant="h5" component="div"   sx={{
    width: 262,
    color: '#FFFFFF',
  }}>
        Navitia  API
      </Typography>
      <Typography sx={{
    width: 262,
    color: '#FFFFFF',
    opacity: 0.7,
  }} variant="body2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec nibh pretium, viverra nisi quis, imperdiet turpis. Aliquam facilisis, augue vitae sollicitudin fermentum, dui urna bibendum felis, eu consequat nisl neque lacinia ex. Pellentesque sit amet ullamcorper dolor. Suspendisse et bibendum velit.
      </Typography>
    </CardContent>
    <CardActions>
      <Fab  aria-label="add">
        <ArrowForwardIcon />
      </Fab>
    </CardActions>
  </CardMedia>

  )
}
