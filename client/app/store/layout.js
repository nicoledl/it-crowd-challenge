import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Navbar from "@/components/common/Navbar";
import SearchInput from "@/components/store/SearchInput";

export default function RootLayout({ children }) {
  return (
    <div>
      <Header />
      <Navbar />
      <SearchInput />
      {children}
      <Footer />
    </div>
  );
}
