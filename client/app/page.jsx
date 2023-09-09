import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Navbar from "@/components/common/Navbar";
import Welcome from "@/components/store/Welcome";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Welcome />
      <Footer />
    </>
  );
}
