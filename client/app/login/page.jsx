"use client";
import Login from "@/components/admin/Login";
import Header from "@/components/common/Header";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const page = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .post(`https://it-crowd-challenge.up.railway.app/auth/verify-token`, null, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        router.push("/admin");
      })
      .catch((error) => {
        localStorage.removeItem("token");
        console.error(error);
      });
  }, []);

  return (
    <>
      <Header />
      <Login />
    </>
  );
};

export default page;
