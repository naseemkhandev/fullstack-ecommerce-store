import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { emptyCart } from "../store/slices/cartSlice";
import { emptyFavorites } from "../store/slices/favoritesSlice";

const RootLayout = () => {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (!authUser) {
      dispatch(emptyCart());
      dispatch(emptyFavorites());
    }
  }, [authUser, dispatch]);

  return (
    <div className="min-h-screen flex flex-col gap-10 w-full relative overflow-x-hidden">
      <Navbar />

      <div className="flex-grow container w-full px-3 md:px-5 mx-auto">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default RootLayout;
