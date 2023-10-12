"use client";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };
  return (
    <button onClick={handleLogout}>
      <div className="flex gap-1 cursor-pointer">
        <p className="text-lg">exit</p>
        <ArrowLeftOnRectangleIcon width={25} />
      </div>
    </button>
  );
};

export default LogoutButton;
