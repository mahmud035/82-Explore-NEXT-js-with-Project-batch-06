import Head from 'next/head';
import Link from 'next/link';
import Banner from '../Components/Banner/Banner';
import Footer from '../Components/Footer/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      {/* <h1>This is Home Page</h1>
      <Link href="/blogs/blog1">
        <button>Blog</button>
      </Link> */}
      <br /> <br />
      <Banner></Banner>
      <Footer></Footer>
    </div>
  );
}
