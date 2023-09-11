"use client";
import { useEffect, useState } from "react";
import { Cog6ToothIcon, TrashIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import EditProductForm from "./EditProductForm";
import Pagination from "../common/Pagination";
import MessageAlert from "../common/Message";

const ProductsList = () => {
  const token = localStorage.getItem("token");

  const [products, setProducts] = useState([]);
  const [editWindowId, setEditWindowId] = useState(null);
  const [action, setAction] = useState(true);
  const [page, setPage] = useState(1);
  const [showAlert, setShowAlert] = useState(false);
  const [brands, setBrands] = useState(null);
  const [sortBrand, setSortBrand] = useState(null);
  const [paginationUrl, setPaginationUrl] = useState(
    `${process.env.NEXT_SERVER_URL_BASE}/products`
  );

  // products
  useEffect(() => {
    if (sortBrand && sortBrand != "Select a brand") {
      axios
        .get(
          `${process.env.NEXT_SERVER_URL_BASE}/search/page?keyword=${sortBrand}&page=${page}`
        )
        .then((response) => {
          setProducts(response.data);
          setAction(true);
        })
        .catch((error) => {
          console.error("Error al obtener los datos:", error);
        });

      setPaginationUrl(
        `${process.env.NEXT_SERVER_URL_BASE}/search?keyword=${sortBrand}`
      );
      return;
    }

    axios
      .get(`${process.env.NEXT_SERVER_URL_BASE}/products/${page}`)
      .then((response) => {
        setProducts(response.data);
        setAction(true);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });

    setPaginationUrl(`${process.env.NEXT_SERVER_URL_BASE}/products`);
  }, [action, page, sortBrand]);

  // brands
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_SERVER_URL_BASE}/brands`)
      .then((response) => {
        setBrands(response.data);
        setAction(true);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);

  const deleteProduct = (id) => {
    axios
      .delete(`${process.env.NEXT_SERVER_URL_BASE}/products/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        handleButtonClick();
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== id)
        );
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
    setAction(!action);
  };

  const handleButtonClick = () => {
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  const handleBrandSelected = (e) => {
    const value = e.target.value;
    setSortBrand(value);
  };

  return (
    <>
      {showAlert && (
        <MessageAlert
          title="Success"
          content="The product was eliminated correctly."
          style="bg-lime-400 text-lime-50"
        />
      )}
      <div className="grid w-fit my-6">
        <select onChange={handleBrandSelected} className="rounded border p-1">
          <option value={null}>Select a brand</option>
          {brands?.map((brand) => (
            <option key={brand.id} value={brand.name}>
              {brand.name}
            </option>
          ))}
        </select>
      </div>
      <div className="container mx-auto">
        <div className="grid  divide-y dark:divide-black">
          <div className="grid grid-cols-4 sm:grid-cols-6 text-center py-3">
            <div className="sm:block hidden">#</div>
            <div className="col-span-2">Name</div>
            <div className="sm:block hidden">Brand</div>
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
                } grid grid-cols-4 sm:grid-cols-6 text-center items-center h-fit py-1 `}
              >
                <div className="sm:block hidden">{product.id}</div>
                <div className="flex col-span-2 items-center gap-2">
                  <img
                    src={
                      products.image_url
                        ? products.image_url
                        : "https://www.pulsorunner.com/wp-content/uploads/2014/10/default-img.gif"
                    }
                    alt={product.name}
                    className="w-[50px] h-[50px] rounded-full object-cover sm:block hidden"
                  />
                  {product?.name}
                </div>
                <div className="sm:block hidden">
                  {product.brand ? product?.brand.name : ""}
                </div>
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
                    onClick={() => {
                      deleteProduct(product.id);
                    }}
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
      <Pagination setPage={setPage} url={paginationUrl} />
    </>
  );
};

export default ProductsList;
