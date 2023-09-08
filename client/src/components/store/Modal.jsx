import { XMarkIcon } from "@heroicons/react/24/solid";
import $ from "jquery";

const Modal = ({ closeFn, product }) => {
  const { image_url, name, description, price, brand } = product;

  $(document).on("mouseenter", ".image-modal", function () {
    $(".details-modal").css("display", "none");
  });

  $(document).on("mouseleave", ".image-modal", function () {
    $(".details-modal").css("display", "block");
  });

  return (
    <div className="modal absolute w-screen h-screen top-0 left-0 fixed z-20 bg-black/10 backdrop-blur">
      <div className="drop-shadow-lg absolute m-auto top-0 bottom-0 left-0 right-0 w-[300px] md:w-[600px] h-[500px] md:h-[400px] bg-white pt-8 p-2 md:pt-3 md:p-3">
        <div className="modal-content md:flex h-full">
          <img
            className="image-modal object-cover md:w-[180px] w-full h-[50%] md:h-full hover:h-full md:hover:w-full ease-out duration-300 "
            src="https://www.pulsorunner.com/wp-content/uploads/2014/10/default-img.gif"
            alt="img-default"
          />
          <div className="details-modal p-4">
            <p>{name}</p>
            <p>{brand.name}</p>
            <p>{description}</p>
            <p>{price}</p>
          </div>
        </div>
        <XMarkIcon
          onClick={closeFn}
          className="absolute right-0 top-0 w-8 text-red-500 cursor-pointer bg-white"
        />
      </div>
    </div>
  );
};

export default Modal;
