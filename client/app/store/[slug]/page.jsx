"use client";
import Products from "@/components/store/Products";
import axios from "axios";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

const page = () => {
  const search = window.location.search;
  const [products, setProducts] = useState(null);

  useEffect(() => {
    if (!products) {
      try {
        axios
          .get(`http://localhost:3000/api/search${search}`)
          .then((response) => setProducts(response.data));
      } catch (error) {
        console.error(error);
      }
    }
  }, [products]);

  console.log(products);

  if (!products) {
    return (
      <div
        className="absolute top-0 bottom-0 left-0 right-0 m-auto h-screen w-screen justify-center flex items-center"
        style={{ alignItems: "center", zIndex: "-2" }}
      >
        <BeatLoader color="#ffff" size={25} />
      </div>
    );
  }
  return (
    <div>
      <Products products={products}/>
    </div>
  );
};

export default page;
