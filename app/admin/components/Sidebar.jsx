"use client";
import { useState } from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import ThemeSwitcher from "../../services/ThemeSwitcher";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="md:hidden flex">
      <EllipsisVerticalIcon
        width={25}
        onClick={handleOpen}
        className="cursor-pointer"
      />
      {open && (
        <div className="animate-flip-down animate-once absolute left-0 top-0 w-full p-2 bg-gray-800/80 backdrop-blur-md text-white drop-shadow-3xl">
          <div className="flex justify-between">
            <p className="mb-5">Menu</p>
            <EllipsisVerticalIcon
              width={25}
              onClick={handleOpen}
              className="cursor-pointer"
            />
          </div>
          <div className="divide-y">
            <Link href="/admin" className="flex gap-1 cursor-pointer">
              <p className=" uppercase hover:text-mustard hover:font-bold  duration-150 transition">
                products
              </p>
            </Link>
            <Link
              href="/admin/brands"
              className="flex gap-1 cursor-pointer mb-10"
            >
              <p className=" uppercase hover:text-mustard hover:font-bold duration-150 transition">
                brand
              </p>
            </Link>
          </div>
          <LogoutButton />
        </div>
      )}
      <ThemeSwitcher />
    </div>
  );
};

export default Sidebar;
