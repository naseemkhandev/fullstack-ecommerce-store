import { Navigate, Outlet } from "react-router-dom";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useSelector } from "react-redux";

const RootLayout = () => {
  const authUser = useSelector((state) => state.auth.user);

  return authUser ? (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  ) : (
    <Navigate to="/auth/login" />
  );
};

export default RootLayout;
