"use client";
import { useEffect, useState } from "react";
import Products from "./Products";
import axios from "axios";

const Store = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products/")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);

  return <Products products={products} />;
};

export default Store;
