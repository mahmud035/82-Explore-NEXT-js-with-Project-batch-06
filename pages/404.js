import Image from 'next/image';
import Link from 'next/link';

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen">
      <Image src="/error.png" width="600" height="400"></Image>

      <Link href="/">
        <button className="btn btn-primary my-6">Bact to Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
