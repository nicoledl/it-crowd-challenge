import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import ThemeSwitcher from "../../../app/utils/ThemeSwitcher";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between p-2">
      <span className="rounded-t-lg rounded-full mt-[-100px] absolute bg-mustard w-[250px] sm:w-[400px] md:w-[600px] h-[250px] sm:h-[300px] left-0 right-0 mx-auto z-[-1]"></span>
      <Link href="/" className="flex gap-1">
        <div className="flex hover:text-rose-700 text-rose-500 transition duration-150">
          <ShoppingCartIcon className="h-6 w-6" />
          <p className="uppercase font-bold">shopping</p>
        </div>
      </Link>
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
