import Head from 'next/head'

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  const paths = data.map(i => {
    return { params: { id: i.id.toString() } }
  })

  return { paths, fallback: false }
}

export const getStaticProps = async context => {
  const id = context.params.id
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await res.json()

  return { props: { props: data } }
}

const Details = ({ props }) => {
  return (
    <>
      <Head>
        <title>Doan Arsenal | Details</title>
        <meta name='keywords' content='doan' />
      </Head>
      <section>
        <h1>Details Page</h1>
        <h3>{props.name}</h3>
        <p>{props.email}</p>
        <p>{props.website}</p>
        <p>{props.address.city}</p>
      </section>
    </>
  )
}

export default Details