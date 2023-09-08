import Navbar from "@/components/admin/Navbar";
import PrivateRoute from "../utils/PrivateRoute";
import Header from "@/components/admin/Header";

export default function RootLayout({ children }) {
  return (
    <div>
      <PrivateRoute>
        <Header />
        <Navbar />
        {children}
      </PrivateRoute>
    </div>
  );
}
