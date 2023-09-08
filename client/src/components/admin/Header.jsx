import Link from "next/link";
import ThemeSwitcher from "../../../app/utils/ThemeSwitcher";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header className="flex justify-between text-gray-800 dark:text-white m-2">
      <Link href="/" className="flex gap-1 ">
        <ShoppingCartIcon className="h-6 w-6" />
        <p className=" uppercase font-bold">shopping</p>
      </Link>
      <div>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
