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
    if (token) {
      router.push("/admin");
      return;
    }
  }, []);

  return (
    <>
      <Header />
      <Login />
    </>
  );
};

export default page;
