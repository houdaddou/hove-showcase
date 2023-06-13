import * as React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/solutions.module.css"
import Card from './cardframe';
import { useState } from 'react';




export default function Solutions() {
  
  const [parentData] = useState('/navitia-frame.svg');
  const [patternsFrame] = useState('/patterns-frame.svg');
  const [patternsRedirectFrame] = useState('/patterns-redirect-frame.svg');
  const [navitiaRedirectFrame] = useState('/navitia-redirect-frame.svg');



  return (
    <Layout>
    <section>
      <div className={styles.header}>
        <h1>NOS SOLUTIONS</h1>
      </div>
      <div className={styles.header1}>
        <h2>Navitia</h2>
        <h3>Le calculateur d'itinéraire</h3>
        <Card parentData={parentData}/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
      <div  className={styles.header2}>
      <h2>Patterns</h2>
        <h3>Les études de territoire</h3>
        <Card parentData={patternsFrame}/>

      </div>
    </section>
    </Layout>
  )
}
