"use client";
import { useEffect, useState } from "react";
import { Cog6ToothIcon, TrashIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import Navbar from "./Navbar";
import EditBrandForm from "./EditBrandForm";

const ProductsList = () => {
  const [brands, setBrands] = useState([]);
  const [editWindowId, setEditWindowId] = useState(null);
  const [action, setAction] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/brands/")
      .then((response) => {
        setBrands(response.data);
        setAction(true)
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, [action]);

  const deleteBrand = (id) => {
    axios
      .delete(`http://localhost:3000/api/brands/${id}`)
      .then((response) => {
        setBrands(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
    setAction(!action);
  };

  return (
    <>
      <Navbar title="Brands Managment" />

      <div className="container mx-auto">
        <div className="grid divide-y">
          <div className="grid grid-cols-3 text-center py-3">
            <div>#</div>
            <div>Name</div>
            <div>Actions</div>
          </div>
          {brands?.map((brand) => {
            return (
              <div
                key={brand.id}
                className={`${
                  editWindowId ? "" : "dark:hover:bg-gray-100/30 hover:bg-gray-50"
                } grid grid-cols-3 text-center items-center h-fit py-1`}
              >
                <div>{brand.id}</div>
                <div className="flex items-center gap-2">
                  <img
                    src="https://www.pulsorunner.com/wp-content/uploads/2014/10/default-img.gif"
                    alt={brand.name}
                    className="w-[50px] h-[50px] rounded-full object-cover"
                  />
                  {brand?.name}
                </div>
                <div className="flex justify-center items-center">
                  <Cog6ToothIcon
                    width={25}
                    className="cursor-pointer text-gray-700 hover:text-sky-500"
                    onClick={() => {
                      if (editWindowId !== brand.id) {
                        setEditWindowId(brand.id);
                      }
                      if (editWindowId != null) {
                        setEditWindowId(null);
                      }
                    }}
                  />
                  <TrashIcon
                    width={25}
                    onClick={() => deleteBrand(brand.id)}
                    className="cursor-pointer text-gray-700 hover:text-red-500"
                  />
                </div>
                {editWindowId === brand.id && (
                  <EditBrandForm
                    brand={brand}
                    closeEdit={setEditWindowId}
                    actionState={setAction}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductsList;
