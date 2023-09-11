"use client";
import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      window.location.href = `${process.env.NEXT_PUBLIC_URL_CLIENT}/store/search/page?keyword=${inputValue}`;
    }
  };

  return (
    <>
      <div className="w-full flex justify-center mb-5">
        <div className="border bg-white relative w-[300px] h-[30px] rounded-full flex justify-end ">
          <MagnifyingGlassIcon className="absolute w-6 bottom-0 top-0 m-auto left-2 text-black/20" />
          <input
            className="w-[85%] me-3 p-2 bg-transparent focus:bg-transparent"
            type="text"
            name="search"
            id="search"
            onChange={handleChange}
            onKeyDown={handleKeyPress}
          />
        </div>
      </div>
    </>
  );
};

export default SearchInput;
