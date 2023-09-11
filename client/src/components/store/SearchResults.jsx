"use client";
import Pagination from "@/components/common/Pagination";
import Products from "@/components/store/Products";
import axios from "axios";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

const SearchResults = () => {
  const search = window.location.search;
  const [products, setProducts] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!products) {
      try {
        axios
          .get(`${process.env.NEXT_SERVER_URL_BASE}/search/page${search}&page=${page}`)
          .then((response) => setProducts(response.data));
      } catch (error) {
        console.error(error);
      }
    }
  }, [products]);

  if (!products) {
    return (
      <div
        className="absolute top-0 bottom-0 left-0 right-0 m-auto h-screen justify-center flex items-center"
        style={{ alignItems: "center", zIndex: "-2" }}
      >
        <BeatLoader color="#ffff" size={25} />
      </div>
    );
  }
  return (
    <div>
      <Products products={products} />
      <Pagination
        setPage={setPage}
        url={`${process.env.NEXT_SERVER_URL_BASE}/search${search}`}
      />
    </div>
  );
};

export default SearchResults;
