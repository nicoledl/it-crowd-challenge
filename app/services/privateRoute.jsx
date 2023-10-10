"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { BeatLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const router = useRouter();
  const [pass, setPass] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    axios
      .post(`${process.env.NEXT_PUBLIC_URL_SERVER}/auth/verify-token`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setPass(true);
      })
      .catch((error) => {
        console.error("Error de verificación de token:", error);
        router.push("/login");
      });
  }, [children]);

  if (!pass) {
    return (
      <div
        className="absolute top-0 bottom-0 left-0 right-0 m-auto h-screen justify-center flex items-center"
        style={{ alignItems: "center", zIndex: "-2" }}
      >
        <div className="grid">
          <div className="justify-center flex items-center w-full">
            <BeatLoader color="#F43F5E" size={25} />
          </div>
          <p className="text-center mt-2 text-xl text-stone-950/60 dark:text-white">
            Loading...
          </p>
        </div>
      </div>
    );
  }

  return <div>{children}</div>;
};

export default PrivateRoute;
