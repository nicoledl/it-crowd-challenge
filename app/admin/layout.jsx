import PrivateRoute from "../services/privateRoute";
import Header from "./components/Header";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <PrivateRoute>
        <Header />
        {children}
      </PrivateRoute>
    </div>
  );
};

export default AdminLayout;
