"use client";
import Pagination from "./Pagination";
import Products from "./Products";
import axios from "axios";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

const SearchResults = () => {
  const search = window.location.search;
  const [products, setProducts] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_URL_SERVER}/api/search/page${search}&page=${page}`
      )
      .then((response) => setProducts(response.data))
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);

  if (!products) {
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
            This may take a couple of minutes.
          </p>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Products products={products} />
      {products.length !== 0 ? (
        <Pagination
          setPage={setPage}
          url={`${process.env.NEXT_PUBLIC_URL_SERVER}/products`}
        />
      ) : (
        <p className="animate-bounce animate-infinite text-center mt-44 text-3xl">
          Not products founded... :(
        </p>
      )}
    </div>
  );
};

export default SearchResults;
