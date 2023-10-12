import Navbar from "../../components/Admin/AddProductPanel";
import ProductsList from "../../components/Admin/ProductsList";

const AdminPage = () => {
  return (
    <>
      <Navbar title="Products Managment" />
      <ProductsList />
    </>
  );
};

export default AdminPage;
