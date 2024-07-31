import { Outlet } from "react-router-dom";

import Footer from "../components/footer";
import Navbar from "../components/navbar";

const RootLayout = () => {
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
