"use client";
import React, { useState } from "react";
import axios from "axios";
import { XMarkIcon } from "@heroicons/react/24/solid";

//styles
const buttonStyle = "border border-gray-200 rounded dark:focus:text-black";

const EditBrandForm = ({ brand, closeEdit, actionState }) => {
  const { id, name, image_url } = brand;
  const [formData, setFormData] = useState({
    name: name,
    image_url: image_url,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:3000/api/brands/${id}`,
        formData
      );
      console.log("Brand created:", response.data);
      actionState(false)
    } catch (error) {
      console.error("Error creating brand:", error);
    }
  };

  return (
    <div className="col-span-full text-gray-800 dark:bg-gray-100/30 hover:bg-gray-50 dark:text-white px-5 mt-1 px-auto relative col-span-full bg-gray-50">
      <h2 className="font-bold text-lg my-5 text-start">Edit page:</h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-5 text-start md:mx-36"
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
        <button
          type="submit"
          className="hover:opacity-50 bg-gray-700 text-white p-2 rounded my-2 w-fit transition duration-150"
        >
          Submit
        </button>
      </form>
      <XMarkIcon
        onClick={() => closeEdit(null)}
        className="absolute right-0 top-0 w-8 text-red-500 cursor-pointer hover:text-red-600"
      />
    </div>
  );
};

export default EditBrandForm;
