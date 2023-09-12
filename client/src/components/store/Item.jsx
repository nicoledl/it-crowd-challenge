import { TagIcon } from "@heroicons/react/24/solid";

const Item = ({ product }) => {
  const { image_url, name, price, brand, id } = product;
  return (
    <div className="border border-gray-100 bord drop-shadow-3xl m-0 p-0 bg-white dark:bg-gray-500 dark:drop-shadow-4xl dark:border-none hover:bg-slate-100 ease-out duration-300 w-full h-[280px] hover:scale-105 relative rounded">
      <img
        className="w-full object-cover h-[220px] rounded-t-sm"
        src={
          image_url
            ? image_url
            : "https://www.pulsorunner.com/wp-content/uploads/2014/10/default-img.gif"
        }
        alt="img-default"
      />
      <div className="grid gap-1 align-center px-3 font-bold">
        <p className="capitalize text-sm capitalize">{name}</p>
        <div className="absolute flex bottom-0 right-0 me-2 mb-1">
          <p className="text-md">${price}</p>
          <TagIcon className="h-6 w-6 text-lime-500" />
        </div>
      </div>
    </div>
  );
};

export default Item;
