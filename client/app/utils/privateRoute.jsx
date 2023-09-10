"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function PrivateRoute({ children }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }
    
    axios
      .post("/verify-token", { token })
      .then((response) => {
        setIsLoading(false);
      })
      .catch((error) => {
        router.push("/login");
      });
  }, []);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return <div>{children}</div>;
}
