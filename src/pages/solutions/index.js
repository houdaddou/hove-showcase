import * as React from "react"
import Layout from "../../components/Layout"
import * as classes from "../../styles/solutions.module.css"
import Card from './cardframe';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import JSONData from "./solutions.json"
import CardMedia from '@mui/material/CardMedia';




export default function Solutions() {
  
  const [parentData] = useState('/navitia-frame.svg');
  const [patternsFrame] = useState('/patterns-frame.svg');
  

  return (
    <CardMedia image={'/solution_navitia_background.svg'}>
    <Layout>
    <section>
      <div className={classes.header}>
        <h1>{JSONData.generalContent.title}</h1>
      </div>
      <div className={classes.header1}>
        <h3>{JSONData.navitia.title}</h3>
        <Grid
          container
          spacing={1}
          className={classes.gridContainer}
        >

        {JSONData.navitia.content.map((navitia, key) => {
                return (
                  <div style={{ padding: 20 }}>
                  <Grid key={key} item>
                    <Card
                        key={key}
                        content={navitia}
                        parentData={JSONData.navitia}
                    />
                    </Grid>
                    </div>
                );
            })}
          </Grid>
          <h3>{JSONData.data.title}</h3>
        <Grid
          container
          spacing={1}
          className={classes.gridContainer}
          justifyItems="center"
        >

        {JSONData.data.content.map((data, key) => {
                return (
                  <div style={{ padding: 20 }}>

                  <Grid key={key} item>
                    <Card
                        key={key}
                        content={data}
                        parentData={JSONData.data}
                    />
                    </Grid>
                    </div>
                );
            })}
          </Grid>
      </div>
      <div  className={classes.header2}>
        <Grid
          container
          spacing={1}
          className={classes.gridContainer}
          justifyItems="center"
        >

        {JSONData.mobilityData.content.map((mobility, key) => {
                return (
                  <div style={{ padding: 20 }}>

                  <Grid key={key} item>
                    <Card
                        key={key}
                        content={mobility}
                        parentData={JSONData.mobilityData}
                    />
                    </Grid>
                    </div>
                );
            })}
          </Grid>
      </div>
    </section>
    </Layout>
    </CardMedia>
  )
}
