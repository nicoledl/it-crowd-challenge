import Navbar from "./components/Navbar";
import ProductsList from "./components/ProductsList";

const AdminPage = () => {
  return (
    <>
      <Navbar title="Products Managment" />
      <ProductsList />
    </>
  );
};

export default AdminPage;
