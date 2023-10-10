import PrivateRoute from "../services/privateRoute";
import Header from "./components/Header";

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
