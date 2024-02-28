import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function UnauthenticatedRoute({ children }) {
  const { user } = UserAuth();
  return user?.email ? <Navigate to="/" /> : children;
}

export default UnauthenticatedRoute;
