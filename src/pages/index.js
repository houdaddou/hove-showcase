import { Link } from "gatsby"
import * as React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'
// import Autocomplete from '@mui/material/Autocomplete';



export default function Home() {
  return (
    <Layout>
    <section className={styles.header}>
      <div>
        {/* <h2>Salut Houda !</h2>
        <Link className={styles.btn} to='/projects'>Hove Project</Link>
        <img src={'/hove.jpg'} alt="Hove"></img> */}
        {/* <Autocomplete
  id="combo-box-demo"
  label="Test" /> */}
      </div>
    </section>
    </Layout>
  )
}
