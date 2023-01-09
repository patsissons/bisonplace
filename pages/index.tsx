import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>BISON Place</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#83848" />
        <meta name="theme-color" content="#d1d2d4" />
      </Head>

      <main className={styles.main}>
        <div className={styles.text}>
          <h1 className={styles.title}>
            Welcome to BISON Place
          </h1>

          <p className={styles.description}>
            coming soon...
          </p>
        </div>
      </main>
    </div>
  )
}

export default Home
