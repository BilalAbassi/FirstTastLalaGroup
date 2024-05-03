import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Dashboard from "../pages/Dashboard";

const PrivateRoute = () => {
  const user = useSelector((state) => state.user);
  let location = useLocation();

  if (!user.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Dashboard/>;
};

export default PrivateRoute;