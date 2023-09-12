"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LoginForm from "./LoginForm";
import Header from "../common/Header";

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .post(`${process.env.NEXT_PUBLIC_URL_SERVER}/auth/verify-token`, null, {
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
      <LoginForm />
    </>
  );
};

export default Login;
