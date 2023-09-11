"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LoginForm from "./LoginForm";
import Header from "./Header";

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .post(
        `https://it-crowd-challenge.up.railway.app/auth/verify-token`,
        null,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
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
