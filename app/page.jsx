import { Footer, Header, Navbar, Welcome } from "../components";

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
