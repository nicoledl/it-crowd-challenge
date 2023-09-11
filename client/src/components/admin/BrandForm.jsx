"use client";
import React, { useState } from "react";
import axios from "axios";

//styles
const buttonStyle = "border border-gray-200 rounded dark:focus:text-black";

const BrandForm = () => {
  const token = localStorage.getItem("token");
  
  const [formData, setFormData] = useState({
    name: "",
    image_url: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
console.log(process.env.NEXT_PUBLIC_SERVER);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URL_SERVER}/brands`,
        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Brand created:", response.data);
      window.location.href = "/admin";
    } catch (error) {
      console.error("Error creating brand:", error);
    }
  };

  return (
    <div className="text-gray-800 dark:text-white px-5">
      <h2 className="font-bold text-2xl my-5 text-mustard">Add a Brand</h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-auto"
      >
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
        <div>
          <button
            type="submit"
            className="hover:opacity-50 bg-gray-700 text-white p-2 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BrandForm;
