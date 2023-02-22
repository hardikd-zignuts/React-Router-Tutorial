import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const IsAuthorized = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.userName) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }

  return children;
};

export default IsAuthorized;
