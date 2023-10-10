"use client";
import { useEffect, useState } from "react";

const MessageAlert = ({ title, content, style }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return isVisible ? (
    <div
      className={`fixed drop-shadow-lg top-0 left-0 right-0 mx-auto w-fit m-2 sm:w-300px p-2 rounded mt-5 animate-fade-down ${style}`}
    >
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  ) : null;
};

export default MessageAlert;
