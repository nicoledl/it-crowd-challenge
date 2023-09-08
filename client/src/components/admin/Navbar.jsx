import Link from "next/link";
import { PlusCircleIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <nav className="w-screen flex gap-5 justify-between align-center text-white font-bold tracking-wider text-lg px-44 py-2 bg-rose-500">
      <div className="text-xl uppercase">Managment</div>
      <div className="flex">
        <PlusCircleIcon width={25} />
        add new product
      </div>
    </nav>
  );
};

export default Navbar;
