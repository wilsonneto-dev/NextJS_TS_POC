import Head from 'next/head';
import { GetStaticProps } from 'next';

export default function Home({ allPostsData }: { allPostsData: {}[] }) {
  return (
    <>
      <Head>
        <title>Just testing</title>
      </Head>
      <section>testing...</section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = [];
  return {
    props: {
      allPostsData,
    },
  };
};
