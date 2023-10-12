"use client";
import { useEffect, useState } from "react";
import Item from "./Item";
import Modal from "./Modal";
import $ from "jquery";

const Products = ({ products }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    $(document).on("mouseenter", ".image-modal", function () {
      $(".details-modal").css("display", "none");
    });

    $(document).on("mouseleave", ".image-modal", function () {
      $(".details-modal").css("display", "block");
    });
  }, []);

  const openModal = (index) => {
    setSelectedItem(index);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <section className="container mx-auto px-8 sm:px-4 xl:px-44">
      <div className="grid justify-center grid-cols-1 sm:grid-cols-3 xl:grid-cols-5 gap-2 sm:gap-8">
        {products.map((product, i) => (
          <div key={i}>
            {selectedItem === i && (
              <Modal closeMondal={closeModal} product={product} />
            )}
            <div className="cursor-pointer" onClick={() => openModal(i)}>
              <Item product={product} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
