import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 5000);
  }, [])

  return (
    <>
      <Head>
        <title>Doan Arsenal | 404 Not Found</title>
        <meta name='keywords' content='doan' />
      </Head>
      <section className='not-found'>
        <h1>Oops...</h1>
        <h2>That page cannot be found.</h2>
        <p>Go back to the <Link href='/'><a>Homepage</a></Link></p>
      </section>
    </>
  )
}
 
export default NotFound