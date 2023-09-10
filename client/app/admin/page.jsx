import Navbar from "@/components/admin/Navbar";
import ProductsList from "@/components/admin/ProductsList";

const page = () => {
  return (
    <>
      <Navbar title="Products Managment" />
      <ProductsList />
    </>
  );
};

export default page;
