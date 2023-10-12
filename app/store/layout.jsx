import { Footer, Header, Navbar, SearchInput } from "../../components";

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
