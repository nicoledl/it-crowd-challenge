import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Navbar from "@/components/common/Navbar";
import Search from "@/components/store/Search";

export default function RootLayout({ children }) {
  return (
    <div>
      <Header />
      <Navbar />
      <Search />
      {children}
      <Footer />
    </div>
  );
}
