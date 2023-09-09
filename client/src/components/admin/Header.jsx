import Link from "next/link";
import ThemeSwitcher from "../../../app/utils/ThemeSwitcher";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import LogoutButton from "./LogoutButton";
import Sidebar from "./Sidebar";

const Header = () => {
  return (
    <header className="relative flex justify-between text-gray-800 dark:text-white p-2 py-5">
      <Link
        href="/"
        className="flex gap-1 cursor-pointer hover:scale-110 duration-100 transition"
      >
        <ShoppingCartIcon className="h-6 w-6" />
        <p className=" uppercase font-bold">shopping</p>
      </Link>
      <Sidebar />
      <div className="flex gap-5 md:flex hidden">
        <Link href="/admin" className="flex gap-1 cursor-pointer">
          <p className=" uppercase font-bold hover:text-mustard duration-150 transition">
            products
          </p>
        </Link>
        <Link href="/admin/brands" className="flex gap-1 cursor-pointer">
          <p className=" uppercase font-bold hover:text-mustard duration-150 transition">
            brand
          </p>
        </Link>
      </div>
      <div className="flex gap-10 md:flex hidden">
        <LogoutButton />
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
