import Head from "next/head";

export default function Post({ postData }) {
  return (
    <div>
      <Head>
        <title>Post</title>
      </Head>
      <article>
        <h1>Post</h1>
      </article>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = [];
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = {};
  return {
    props: {
      postData,
    },
  };
}
