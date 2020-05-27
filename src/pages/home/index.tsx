import useSWR from 'swr';
import Head from 'next/head';
import { GetStaticProps } from 'next';

// import styles from './styles/index.scss';

export default function Home() {
  // const { data, error } = useSWR('/api/user', fetcher);

  return (
    <>
      <div className="home__container__fd5g4">Home...</div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (): GetStaticProps => {
  const allPostsData = [];
  return {
    props: {
      allPostsData,
    },
  };
};
