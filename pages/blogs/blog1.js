import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const blog1 = () => {
  return (
    <div>
      <Head>
        <title>Blog Page</title>
      </Head>

      <h1>This is a Blog Page: 1</h1>
      <Link href="/">
        <button>Home</button>
      </Link>

      <Image src="/nature.jpeg" width={600} height={400}></Image>
    </div>
  );
};

export default blog1;
