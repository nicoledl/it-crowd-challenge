import BrandForm from "../components/BrandForm";
import Navbar from "../components/Navbar";
import ProductForm from "../components/ProductForm";

const CreatePage = () => {
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

export default CreatePage;
