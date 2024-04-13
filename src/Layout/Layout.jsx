import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="font-montserate">
      <div className="max-w-7xl mx-auto">
        <Navbar></Navbar>

        <div className="min-h-[calc(100vh-365px)]">
          <Outlet></Outlet>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Layout;
