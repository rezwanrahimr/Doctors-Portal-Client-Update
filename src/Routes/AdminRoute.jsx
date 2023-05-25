import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import Loader from "../Pages/Shared/Loader/Loader";
import { useNavigate } from "react-router-dom";

const AdminRoute = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  const { user, loading, logOut } = useContext(AuthContext);
  const { isAdmin, isLoading } = useAdmin(user?.email);
  const navigate = useNavigate();
  if (loading || isLoading) {
    return <Loader></Loader>;
  }
  if (user && isAdmin) {
    return children;
  }

  return logOut()
    .then(() => {
      navigate("/login");
    })
    .catch((error) => console.log(error));
};

export default AdminRoute;
