"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Products from "./Products";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  const [selectedBrandId, setSelectedBrandId] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        if (selectedBrandId) {
          const response = await axios.get(
            `http://localhost:3000/api/products/brand-id/${selectedBrandId}`
          );
          setProducts(response.data);
        } else {
          const response = await axios.get("http://localhost:3000/api/brands/");
          setBrands(response.data);
        }
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    }

    fetchData();
  }, [selectedBrandId]);

  const onClick = (id) => {
    setSelectedBrandId(id);
  };

  if (selectedBrandId) {
    return <Products products={products} />;
  }
  return (
    <section className="container mx-auto px-8 sm:px-4 xl:px-44 text-black/80">
      <div className="grid justify-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-4">
        {brands.map((brand, i) => (
          <div key={i} className="p-10">
            <img
              className="cursor-pointer dark:invert"
              onClick={() => onClick(brand.id)}
              src={brand.image_url}
              alt={brand.name}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;
