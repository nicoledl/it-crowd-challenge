import Link from "next/link";

const PageNotFound = () => {
  return (
    <div className="w-screen h-screen grid justify-center content-center">
      <h1 className="underline decoration-4 decoration-red-500">ERROR 404</h1>
      <h3>Couldn't find requested resourse.</h3>
      <Link href="/" className="text-sky-400">
        Back to Homepage
      </Link>
    </div>
  );
};

export default PageNotFound;