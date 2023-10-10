"use client";
import { useEffect, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import axios from "axios";

const Pagination = ({ setPage, url }) => {
  const [pages, setPages] = useState([1]);
  const [crrPage, setCrrPage] = useState(1);
  const [action, setAction] = useState(false);

  useEffect(() => {
    axios
      .get(`${url}`)
      .then((res) => {
        const productsCount = res.data.length;
        const pagesCount = Math.ceil(productsCount / 15);
        const pagesArray = Array.from({ length: pagesCount }, (_, i) => i + 1);
        setPages(pagesArray);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, [action, url]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Calcula el rango de números de página a mostrar
  const startPage = Math.max(crrPage - 2, 1);
  const endPage = Math.min(crrPage + 2, pages.length);

  return (
    <div className="my-20 container mx-auto max-w-xs">
      <section className="flex justify-between">
        <ArrowLeftIcon
          width={25}
          className="cursor-pointer hover:text-mustard"
          onClick={() => {
            if (crrPage === 1) {
              return;
            }
            setPage(crrPage - 1);
            setCrrPage(crrPage - 1);
            setAction(!action);
            scrollToTop();
          }}
        />
        {pages.slice(startPage - 1, endPage).map((number, i) => (
          <button
            key={i}
            href={"/"}
            className={`${
              crrPage === number && "text-white bg-rose-500 rounded-full"
            } hover:bg-mustard rounded-full w-[40px] h-[40px] duration-300 transition`}
            onClick={() => {
              setPage(number);
              setAction(!action);
              setCrrPage(number);
              scrollToTop();
            }}
          >
            {number}
          </button>
        ))}
        <ArrowRightIcon
          width={25}
          className="cursor-pointer hover:text-mustard"
          onClick={() => {
            if (crrPage === pages[pages.length - 1]) {
              return;
            }
            setPage(crrPage + 1);
            setCrrPage(crrPage + 1);
            setAction(!action);
            scrollToTop();
          }}
        />
      </section>
    </div>
  );
};

export default Pagination;
