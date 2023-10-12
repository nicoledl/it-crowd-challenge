import BrandForm from "../../../components/Admin/BrandForm";
import Navbar from "../../../components/Admin/AddProductPanel";
import ProductForm from "../../../components/Admin/ProductForm";

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
