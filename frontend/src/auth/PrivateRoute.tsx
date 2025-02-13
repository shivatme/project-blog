import { Navigate, Outlet } from "react-router";
import { useAuth } from "./AuthContext";

const PrivateRoute = () => {
  const user = useAuth();
  if (!user?.token) return <Navigate to="/signin" />;
  return <Outlet />;
};

export default PrivateRoute;
