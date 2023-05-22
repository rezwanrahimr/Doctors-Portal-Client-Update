import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import SideBar from "../Pages/Dashboard/Dashboard/SideBar/SideBar";
const DashboardLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="grid grid-cols-2">
        <div>
          <SideBar></SideBar>
        </div>
        <div className="col-span-2">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
