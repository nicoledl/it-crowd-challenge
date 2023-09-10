"use client";
import { useEffect, useState } from "react";
import { Cog6ToothIcon, TrashIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import EditBrandForm from "./EditBrandForm";
import Navbar from "./Navbar";
import Pagination from "../common/Pagination";

const ProductsList = () => {
  const token = localStorage.getItem("token");

  const [brands, setBrands] = useState([]);
  const [editWindowId, setEditWindowId] = useState(null);
  const [action, setAction] = useState(true);
  const [page, setPage] = useState(1);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_URL_BASE}/brands/${page}`)
      .then((response) => {
        setBrands(response.data);
        setAction(true);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, [action, page]);

  const deleteBrand = (id) => {
    axios
      .delete(`${process.env.NEXT_PUBLIC_URL_BASE}/brands/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setBrands(response.data);
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

  return (
    <>
      <Navbar title="Brands Managment" />
      {showAlert && (
        <MessageAlert
          title="Success"
          content="The brand was eliminated correctly."
          style="bg-lime-400 text-lime-50"
        />
      )}
      <div className="container mx-auto">
        <div className="grid divide-y dark:divide-black">
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
                  editWindowId
                    ? ""
                    : "dark:hover:bg-gray-100/30 hover:bg-gray-50"
                } grid grid-cols-3 text-center items-center h-fit py-1`}
              >
                <div>{brand.id}</div>
                <div className="flex items-center gap-2">
                  <img
                    src={
                      brand.image_url
                        ? brand.image_url
                        : "https://www.pulsorunner.com/wp-content/uploads/2014/10/default-img.gif"
                    }
                    alt={brand.name}
                    className="w-[50px] h-[50px] rounded-full object-cover"
                  />
                  {brand.name ? brand.name : ""}
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
                    onClick={() => {
                      deleteBrand(brand.id);
                      handleButtonClick();
                    }}
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
      <Pagination
        setPage={setPage}
        url={`${process.env.NEXT_PUBLIC_URL_BASE}/brands/`}
      />
    </>
  );
};

export default ProductsList;
