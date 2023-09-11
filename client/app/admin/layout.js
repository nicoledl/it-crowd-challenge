import PrivateRoute from "../utils/privateRoute";
import Header from "@/components/admin/Header";

export default function RootLayout({ children }) {
  return (
    <div>
      <PrivateRoute>
        <Header />
        {children}
      </PrivateRoute>
    </div>
  );
}
