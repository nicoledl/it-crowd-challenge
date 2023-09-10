"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/brands/${page}`)
      .then((response) => setBrands(response.data))
      .catch((error) => console.error("Error al obtener los datos:", error));
  }, []);

  const onClick = (name) => {
    window.location.href = `http://localhost:3001/store/search?keyword=${name}`;
  };

  return (
    <>
      <section className="container mx-auto px-8 sm:px-4 xl:px-44 text-black/80">
        <div className="grid justify-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-4">
          {brands.map((brand, i) => (
            <div key={i} className="p-10">
              <img
                className="cursor-pointer dark:invert"
                onClick={() => onClick(brand.name)}
                src={brand?.image_url}
                alt={brand.name}
              />
            </div>
          ))}
        </div>
      </section>
      <Pagination setPage={setPage} url="http://localhost:3000/api/brands/" />
    </>
  );
};

export default Brands;
