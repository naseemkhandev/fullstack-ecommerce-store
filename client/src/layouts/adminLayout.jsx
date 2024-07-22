import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminLayout = () => {
  const authUser = useSelector((state) => state.auth.user);

  return authUser && authUser?.isAdmin ? (
    <div>AdminLayout</div>
  ) : (
    <Navigate to="/" />
  );
};

export default AdminLayout;
