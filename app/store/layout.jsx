import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SearchInput from "./components/SearchInput";

const StoreLayout = ({ children }) => {
  return (
    <div className="container mx-auto">
      <Header />
      <Navbar />
      <SearchInput />
      {children}
      <Footer />
    </div>
  );
};

export default StoreLayout;
