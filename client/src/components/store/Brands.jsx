"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "../common/Pagination";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_URL_BASE}/brands/${page}`)
      .then((response) => setBrands(response.data))
      .catch((error) => console.error("Error al obtener los datos:", error));
  }, []);

  const onClick = (name) => {
    window.location.href = `http://localhost:3001/store/search/page?keyword=${name}`;
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
                src={
                  brand.image_url
                    ? brand.image_url
                    : "https://www.pulsorunner.com/wp-content/uploads/2014/10/default-img.gif"
                }
                alt={brand.name}
              />
            </div>
          ))}
        </div>
      </section>
      <Pagination setPage={setPage} url={`${process.env.NEXT_PUBLIC_URL_BASE}/brands/`} />
    </>
  );
};

export default Brands;
