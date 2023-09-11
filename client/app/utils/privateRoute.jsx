"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function PrivateRoute({ children }) {
  const router = useRouter();
  const [pass, setPass] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    axios
      .post(
        "https://it-crowd-challenge.up.railway.app/auth/verify-token",
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        setPass(true);
        console.log("Token válido");
      })
      .catch((error) => {
        console.error("Error de verificación de token:", error);
        router.push("/login");
      });
  }, [children]);

  if (!pass) {
    return (
      <div className="w-full flex justify-center content-center text-mustard text-bold">
        cargando...
      </div>
    );
  }

  return <div>{children}</div>;
}
