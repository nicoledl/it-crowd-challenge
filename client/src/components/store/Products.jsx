"use client";
import { useState } from "react";
import Item from "./Item";
import Modal from "./Modal";
import $ from "jquery";

const Products = ({ products }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (index) => {
    setSelectedItem(index);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  $(document).on("mouseenter", ".image-modal", function () {
    $(".details-modal").css("display", "none");
  });

  $(document).on("mouseleave", ".image-modal", function () {
    $(".details-modal").css("display", "block");
  });

  return (
    <section className="container mx-auto px-8 sm:px-4 xl:px-44">
      <div className="grid justify-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-4">
        {products.map((product, i) => (
          <div key={i}>
            <div className="cursor-pointer" onClick={() => openModal(i)}>
              <Item product={product} />
            </div>
            {selectedItem === i && (
              <Modal closeFn={closeModal} product={product} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
