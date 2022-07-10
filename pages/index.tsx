import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bison Place</title>
        <meta name="description" content="Home of the Bison Bistro" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Bison Place
        </h1>

        <p className={styles.description}>
          coming soon...
        </p>
      </main>
    </div>
  )
}

export default Home
