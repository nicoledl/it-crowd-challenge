import { TagIcon, XMarkIcon } from "@heroicons/react/24/solid";
import $ from "jquery";
import { useEffect } from "react";

const Modal = ({ closeMondal, product }) => {
  const { image_url, name, description, price, brand } = product;

  useEffect(() => {
    $(document).on("mouseenter", ".image-modal", function () {
      $(".details-modal").css("display", "none");
    });

    $(document).on("mouseleave", ".image-modal", function () {
      $(".details-modal").css("display", "block");
    });
  }, []);

  return (
    <div className="modal w-screen h-screen top-0 left-0 fixed z-20 bg-black/10 backdrop-blur">
      <div className="animate-jump-in animate-once animate-delay-[200ms] animate-normal drop-shadow-lg absolute top-0 bottom-0 left-0 right-0 mx-5 sm:mx-auto sm:w-[300px] md:w-[600px] h-fit sm:h-[500px] md:h-[400px] dark:bg-neutral-800 dark:text-white bg-white pt-8 p-2 md:pt-3 md:p-3">
        <div className="modal-content md:flex h-fit pb-5">
          <img
            className="image-modal object-cover md:w-[180px] w-full h-[50%] md:h-full hover:h-full md:hover:w-full ease-out duration-300 "
            src={
              image_url
                ? image_url
                : "https://www.pulsorunner.com/wp-content/uploads/2014/10/default-img.gif"
            }
            alt="img-default"
          />
          <div className="details-modal p-4 animate-fade animate-once animate-duration-1000 animate-normal">
            <p className="capitalize text-xl sm:text-2xl underline underline-offset-2 text-rose-500">
              {name}
            </p>
            <p className="text-md sm:text-xl my-2 text-gray-500 text-bold">
              {brand.name ? brand.name : ""}
            </p>
            <p
              className="text-md sm:text-lg"
              style={{ overflowWrap: "anywhere" }}
            >
              {description}
            </p>
            <div className="absolute flex bottom-0 right-0 me-3 mb-2">
              <p className="text-3xl">${price}</p>
              <TagIcon className="h-8 w-8 text-lime-500" />
            </div>
          </div>
        </div>
        <XMarkIcon
          onClick={closeMondal}
          className="absolute right-0 top-0 w-8 text-red-500 cursor-pointer bg-white"
        />
      </div>
    </div>
  );
};

export default Modal;
