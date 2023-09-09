"use client";
import { useEffect, useState } from "react";
import { Cog6ToothIcon, TrashIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import EditProductForm from "./EditProductForm";
import Navbar from "./Navbar";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [editWindowId, setEditWindowId] = useState(null);
  const [action, setAction] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products/")
      .then((response) => {
        setProducts(response.data);
        setAction(true);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, [action]);

  const deleteProduct = (id) => {
    axios
      .delete(`http://localhost:3000/api/products/${id}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
    setAction(!action);
  };

  return (
    <>
      <Navbar title="Products Managment" />

      <div className="container mx-auto">
        <div className="grid  divide-y">
          <div className="grid grid-cols-5 sm:grid-cols-6 text-center py-3">
            <div className="sm:block hidden">#</div>
            <div className="col-span-2">Name</div>
            <div>Brand</div>
            <div>Price</div>
            <div>Actions</div>
          </div>
          {products?.map((product) => {
            return (
              <div
                key={product.id}
                className={`${
                  editWindowId
                    ? ""
                    : "dark:hover:bg-gray-100/30 hover:bg-gray-50"
                } grid grid-cols-5 sm:grid-cols-6 text-center items-center h-fit py-1 `}
              >
                <div className="sm:block hidden">{product.id}</div>
                <div className="flex col-span-2 items-center gap-2">
                  <img
                    src="https://www.pulsorunner.com/wp-content/uploads/2014/10/default-img.gif"
                    alt={product.name}
                    className="w-[50px] h-[50px] rounded-full object-cover sm:block hidden"
                  />
                  {product?.name}
                </div>
                <div>{product.brand ? product?.brand.name : ""}</div>
                <div>{product?.price}</div>
                <div className="flex justify-center items-center">
                  <Cog6ToothIcon
                    width={25}
                    className="cursor-pointer text-gray-700 hover:text-sky-500"
                    onClick={() => {
                      if (editWindowId !== product.id) {
                        setEditWindowId(product.id);
                      }
                      if (editWindowId != null) {
                        setEditWindowId(null);
                      }
                    }}
                  />
                  <TrashIcon
                    width={25}
                    onClick={() => deleteProduct(product.id)}
                    className="cursor-pointer text-gray-700 hover:text-red-500"
                  />
                </div>
                {editWindowId === product.id && (
                  <EditProductForm
                    product={product}
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
