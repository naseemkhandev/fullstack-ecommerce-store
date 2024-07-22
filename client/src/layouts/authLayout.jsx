import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const authUser = useSelector((state) => state.auth.user);

  return authUser ? <Navigate to="/" /> : <Outlet />;
};

export default AuthLayout;
