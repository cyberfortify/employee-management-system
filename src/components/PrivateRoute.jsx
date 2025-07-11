import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("employee_manager_authenticated") === "true";
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
