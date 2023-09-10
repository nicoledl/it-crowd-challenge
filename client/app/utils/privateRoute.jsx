"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function PrivateRoute({ children }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }
  }, []);

  return <div>{children}</div>;
}
