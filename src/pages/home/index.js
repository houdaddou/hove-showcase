import * as React from "react"
import Layout from "../../components/Layout"
import CardMedia from '@mui/material/CardMedia';


export default function Home() {
  return (
 
    <Layout>
           <CardMedia image={'/home-background.svg'}
    sx={{ height: 1427, width: 1418, marginLeft: 50, paddingTop: 0}}
    ></CardMedia>
    </Layout>
  )
}