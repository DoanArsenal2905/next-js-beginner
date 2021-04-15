import Link from 'next/link'
import Head from 'next/head'

import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Doan Arsenal | Home</title>
        <meta name='keywords' content='doan' />
      </Head>
      <section>
        <h1>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minima sit ullam pariatur! Pariatur magnam tempora, fuga aut ratione mollitia saepe ipsum reprehenderit, sequi in blanditiis consectetur eligendi eos doloribus!</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minima sit ullam pariatur! Pariatur magnam tempora, fuga aut ratione mollitia saepe ipsum reprehenderit, sequi in blanditiis consectetur eligendi eos doloribus!</p>
        <Link href='/users'><a className={styles.btn}>See Doan List</a></Link>
      </section>
    </>
  )
}
