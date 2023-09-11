"use client";
import { useEffect, useState } from "react";
import Products from "./Products";
import axios from "axios";
import Pagination from "../common/Pagination";

const Store = () => {
  const [productsPerPage, setProductsPerPage] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_URL_SERVER}/products/${page}`)
      .then((res) => {
        setProductsPerPage(res.data);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, [page]);

  return (
    <>
      <Products products={productsPerPage} />
      <Pagination setPage={setPage} url={`${process.env.NEXT_PUBLIC_URL_SERVER}/products`} />
    </>
  );
};

export default Store;
