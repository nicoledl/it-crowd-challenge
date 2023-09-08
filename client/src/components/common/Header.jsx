import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import ThemeSwitcher from "../../../app/utils/ThemeSwitcher";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex w-screen justify-between p-2">
      <Link href="/" className="flex gap-1">
        <ShoppingCartIcon className="h-6 w-6 text-rose-500" />
        <p className="text-rose-500 uppercase font-bold">shopping</p>
      </Link>
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
