import { Outlet } from "react-router-dom";

import Footer from "../components/footer";
import Navbar from "../components/navbar";

const RootLayout = () => {
  return (
    <div className="min-h-dvh flex flex-col gap-10">
      <Navbar />

      <div className="flex-grow container px-3 md:px-5 mx-auto">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default RootLayout;
