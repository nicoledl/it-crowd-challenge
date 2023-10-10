"use client";
import { UserGroupIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Footer = () => {
  return (
    <Link
      href="/login"
      className="overflow-hidden text-sm sm:text-lg flex hover:left-0 -left-[150px] sm:-left-[180px] fixed bottom-10 h-[50px] w-fit bg-mustard text-yellow-700 items-center px-5 hover:opacity-100 opacity-70 ease-in duration-300"
    >
      Do you work here? Login <UserGroupIcon width={20} className="ms-1" />
    </Link>
  );
};

export default Footer;
