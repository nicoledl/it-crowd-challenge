"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

//styles
const buttonStyle =
  "border border-gray-200 rounded dark:focus:text-black mb-4 md:m-0";

const ProductForm = () => {
  const token = localStorage.getItem("token");

  const [brands, setBrands] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image_url: "",
    price: 0,
    brandId: brands.length > 0 ? brands[0].id : "",
  });

  useEffect(() => {
    async function fetchBrands() {
      try {
        const response = await axios.get(
          `${process.env.NEXT_SERVER_URL_BASE}/brands`
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
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.NEXT_SERVER_URL_BASE}/products`,
        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Product created:", response.data);
      window.location.href = "/admin";
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return (
    <div className="text-gray-800 dark:text-white px-5 mb-20">
      <h2 className="font-bold text-mustard text-2xl my-5">Add a Product</h2>
      <form onSubmit={handleSubmit} className="md:grid md:grid-cols-2 gap-4">
        <div className="grid">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={buttonStyle}
          />
        </div>
        <div className="grid">
          <label>Image URL:</label>
          <input
            type="text"
            name="image_url"
            value={formData.image_url}
            className={buttonStyle}
            onChange={handleChange}
          />
        </div>
        <div className="grid">
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className={buttonStyle}
            required
            min={0}
          />
        </div>
        <div className="grid">
          <label>Brand:</label>
          <select
            name="brandId"
            value={formData.brandId}
            onChange={handleChange}
            className={buttonStyle}
            required
          >
            <option value="" disabled>
              Select a brand
            </option>
            {brands.map((brand) => (
              <option key={brand.id} value={brand.id}>
                {brand.name}
              </option>
            ))}
          </select>
        </div>
        <div className="grid col-span-2">
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={buttonStyle}
            required
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="hover:opacity-50 bg-gray-700 text-white p-2 rounded mt-4 md:m-0"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
