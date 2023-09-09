import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="pt-1 pb-1 mb-12">
      <ul className="flex rounded-full gap-5 justify-center align-center text-rose-500 font-bold tracking-wider text-xl">
        <li>
          <Link href="/store" className="hover:border-b-4 border-rose-500">
            store
          </Link>
        </li>
        <li>
          <Link
            href="/store/brands"
            className="hover:border-b-4 border-rose-500"
          >
            brands
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
