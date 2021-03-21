import Head from 'next/head'

export default function Home({ allPostsData }) {
  return (
    <div>
      <Head>
        <title>'Next blog'</title>
      </Head>
      <main>
        <h1>hello world</h1>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const allPostsData = [{ post: 1 }]
  return {
    props: {
      allPostsData,
    },
  }
}
