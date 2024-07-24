import { Outlet } from "react-router-dom";

import Footer from "../components/footer";
import Navbar from "../components/navbar";

const RootLayout = () => {
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
