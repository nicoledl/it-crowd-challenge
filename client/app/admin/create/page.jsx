import BrandForm from "@/components/admin/BrandForm";
import Navbar from "@/components/admin/Navbar";
import ProductForm from "@/components/admin/ProductForm";

const page = () => {
  return (
    <>
      <Navbar title="Adding" />
      <div className="add">
        <ProductForm />
        <BrandForm />
      </div>
    </>
  );
};

export default page;
