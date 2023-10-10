import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Welcome from "./store/components/Welcome";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <Navbar />
      <Welcome />
      <Footer />
    </div>
  );
};

export default Home;
