import PrivateRoute from "../services/privateRoute";
import AdminHeader from "../../components/Admin/AdminHeader";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <PrivateRoute>
        <AdminHeader />
        {children}
      </PrivateRoute>
    </div>
  );
};

export default AdminLayout;
