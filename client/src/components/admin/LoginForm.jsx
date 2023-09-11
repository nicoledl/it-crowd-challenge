"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

const LoginForm = () => {
  const [pswHide, setPswHide] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setErrorMsg(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [errorMsg]);

  const hiddingPassword = () => {
    setPswHide(!pswHide);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://it-crowd-challenge.up.railway.app/auth/login",
        formData,
      );
      const token = response.data.token;
      localStorage.setItem("token", token);

      window.location.href = "/admin";
    } catch (error) {
      setErrorMsg(true);
      console.error("The username or password was wrong.", error);
    }
  };

  return (
    <div className="absolute w-screen h-screen flex justify-center items-center left-0 top-0 z-[-1]">
      <div
        className={`${
          errorMsg &&
          "drop-shadow-xl absolute text-yellow-800 bg-yellow-100 p-3 rounded top-[20%] mx-5 w-fit"
        } ${!errorMsg && "hidden"} transition duration-400 ease-in-out `}
      >
        {"The username or password was wrong."}
      </div>

      <div className="grid gap-5 w-full px-5 md:w-[300px]">
        <h2 className="text-center text-3xl font-bold text-rose-500">
          ¡Welcome Back!
        </h2>
        <form className="grid gap-5" onSubmit={handleSubmit}>
          <div className="grid">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              autoComplete="off"
              className={`${
                errorMsg && "border-2 border-rose-500"
              } border p-1 rounded w-full px-2 focus:dark:text-black transition duration-300 ease-in-out `}
            />
          </div>
          <div className="grid">
            <label htmlFor="password">Password</label>
            <div className="relative">
              <input
                type={pswHide ? "password" : "text"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                autoComplete="off"
                className={`${
                  errorMsg && "border-2 border-rose-500"
                } border p-1 rounded w-full px-2 focus:dark:text-black transition duration-300 ease-in-out `}
              />
              {pswHide ? (
                <EyeSlashIcon
                  onClick={hiddingPassword}
                  width={25}
                  className="text-black/50 absolute right-1 bottom-0 top-0 bottom-0 m-auto backdrop-blur-sm cursor-pointer"
                />
              ) : (
                <EyeIcon
                  onClick={hiddingPassword}
                  width={25}
                  className="text-black/50 absolute right-1 bottom-0 top-0 bottom-0 m-auto backdrop-blur-sm cursor-pointer"
                />
              )}
            </div>
          </div>
          <button
            type="submit"
            className="bg-rose-500 text-white rounded-full w-fit px-3 hover:bg-rose-700 ease-out duration-300 "
          >
            sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
