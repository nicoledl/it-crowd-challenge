"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "../common/Pagination";
import { BeatLoader } from "react-spinners";

const Brands = () => {
  const [brands, setBrands] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_URL_SERVER}/api/brands/${page}`)
      .then((response) => setBrands(response.data))
      .catch((error) => console.error("Error al obtener los datos:", error));
  }, []);

  const onClick = (name) => {
    window.location.href = `${process.env.NEXT_PUBLIC_URL_CLIENT}/store/search/page?keyword=${name}`;
  };

  if (!brands) {
    return (
      <div
        className="absolute top-0 bottom-0 left-0 right-0 m-auto h-screen justify-center flex items-center"
        style={{ alignItems: "center", zIndex: "-2" }}
      >
        <div className="grid">
          <div className="justify-center flex items-center w-full">
            <BeatLoader color="#F43F5E" size={25} />
          </div>
          <p className="text-center mt-44 text-xl text-stone-950/60">
            This may take a couple of minutes.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="container mx-auto px-8 sm:px-4 xl:px-44 text-black/80">
        <div className="grid justify-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4">
          {brands.length !== 0 ? (
            <>
              {brands.map((brand, i) => (
                <div key={i} className="p-10 flex justify-center align-center">
                  {brand.image_url ? (
                    <img
                      src={
                        brand.image_url
                          ? brand.image_url
                          : "https://www.pulsorunner.com/wp-content/uploads/2014/10/default-img.gif"
                      }
                      alt={brand.name}
                      onClick={() => onClick(brand.name)}
                      className="rounded object-contain cursor-pointer dark:invert hover:animate-pulse animate-once"
                    />
                  ) : (
                    <p
                      className="text-3xl text-bolder cursor-pointer dark:invert"
                      onClick={() => onClick(brand.name)}
                    >
                      {brand.name}
                    </p>
                  )}
                </div>
              ))}
            </>
          ) : (
            <p className="animate-bounce animate-infinite text-center mt-44 text-3xl">
              There's not brands yet... :(
            </p>
          )}
        </div>
        {brands.length !== 0 && (
          <Pagination
            setPage={setPage}
            url={`${process.env.NEXT_PUBLIC_URL_SERVER}/api/brands/`}
          />
        )}
      </section>
    </>
  );
};

export default Brands;
