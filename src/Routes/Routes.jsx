import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import MakeAppointment from "../Pages/MakeAppointment/MakeAppointment/MakeAppointment";
import LoginLayout from "../layout/LoginLayout";
import Login from "../Pages/Login/Login";

// Create Browser Router & Set Routes !
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/appointment",
        element: <MakeAppointment></MakeAppointment>,
      },
    ],
  },
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
