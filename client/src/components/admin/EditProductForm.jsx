"use client";
import { XMarkIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useEffect, useState } from "react";
import MessageAlert from "../common/Message";

//styles
const inputStyle =
  "border dark:border-none border-gray-200 rounded dark:focus:text-black mb-4 md:m-0";

const EditProductForm = ({ product, closeEdit, actionState }) => {
  const token = localStorage.getItem("token");

  const { id, name, description, image_url, price, brandId } = product;
  const [brands, setBrands] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  const [caractersControl, setCaractersControl] = useState("");

  const [formData, setFormData] = useState({
    name: name,
    description: description,
    image_url: image_url,
    price: price,
    brandId: brandId,
  });

  useEffect(() => {
    async function fetchBrands() {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_URL_SERVER}/api/brands`
        );
        setBrands(response.data);
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    }

    fetchBrands();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "description" && value.length > 200) {
      setCaractersControl("border border-red-500");
      const truncatedValue = value.substring(0, 200);
      setFormData({ ...formData, [name]: truncatedValue });
    } else {
      setCaractersControl("");
      setFormData({ ...formData, [name]: value });
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_URL_SERVER}/api/products/${id}`,
        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Product created:", response.data);
      actionState(false);
    } catch (error) {
      console.error("Error creating product:", error);
    }

    handleButtonClick();
  };

  const handleButtonClick = () => {
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <>
      {showAlert && (
        <MessageAlert
          title="Success"
          content="The product was edited correctly."
          style="bg-sky-500 text-sky-50"
        />
      )}
      <div className="text-gray-800 dark:text-white dark:bg-gray-100/30 px-5 mt-1 px-auto relative col-span-full bg-gray-50">
        <h2 className="font-bold text-lg my-5 text-start">Edit page:</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap gap-5">
            <div className="flex gap-1">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={inputStyle}
              />
            </div>
            <div className="flex gap-1">
              <label>Image URL:</label>
              <input
                type="text"
                name="image_url"
                value={formData.image_url}
                className={inputStyle}
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-1">
              <label>Price:</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className={inputStyle}
                required
                min={0}
              />
            </div>
            <div className="flex gap-1">
              <label>Brand:</label>
              <select
                name="brandId"
                value={formData.brandId || 0}
                onChange={handleChange}
                className={inputStyle}
              >
                <option value="0" disabled>
                  Select a brand
                </option>
                {brands.map((brand) => (
                  <option key={brand.id} value={brand.id}>
                    {brand.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid col-span-2 md:mt-5 text-start">
            <label>Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className={inputStyle + caractersControl}
              required
              maxLength="210"
              rows="5"
              cols="60"
              style={{ resize: "none" }}
            ></textarea>
            <p>{200 - formData.description.length}</p>
          </div>
          <div className="text-start my-2">
            <button
              type="submit"
              className="hover:opacity-50 bg-gray-700 text-white p-2 rounded mt-4 md:m-0  transition duration-150 focus:animate-pulse animate-infinite animate-duration-500"
            >
              Submit
            </button>
          </div>
        </form>
        <XMarkIcon
          onClick={() => closeEdit(null)}
          className="absolute right-0 top-0 w-8 text-red-500 cursor-pointer hover:text-red-600"
        />
      </div>
    </>
  );
};

export default EditProductForm;
