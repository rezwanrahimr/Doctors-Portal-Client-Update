import { Link, Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import useAdmin from "../hooks/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const { isAdmin } = useAdmin(user?.email);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content " style={{ backgroundColor: "#F1F5F9" }}>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">My Appointment</Link>
            </li>
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/allUser">All User</Link>
                </li>
                <li>
                  <Link to="/dashboard/adddoctor">Add A Doctor</Link>
                </li>
                <li>
                  <Link to="/dashboard/manageDoctors">Manage Doctors</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
