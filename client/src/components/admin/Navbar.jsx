"use client";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Navbar = ({ title }) => {
  return (
    <nav className="grid gap-5 px-1 mg:gap-1 md:flex md:justify-between align-center text-white font-bold text-lg md:px-12 py-5 bg-rose-500 mb-5">
      <div className="text-3xl uppercase">{title}</div>
      <Link href="/admin/create">
        <div className="flex text-xl justify-end hover:text-rose-200 duration-150 transition me-1 sm:me-0">
          <PlusCircleIcon width={25} className="text-rose-700" />
          add new product/brand
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
