"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function PrivateRoute({ children }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    axios
      .post("http://localhost:3000/auth/verify-token", null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        console.log("Token válido");
      })
      .catch((error) => {
        console.error("Error de verificación de token:", error);
        router.push("/login");
      });
  }, [children]);

  return <div>{children}</div>;
}