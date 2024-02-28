import { Navigate } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"

function ProtectedRoute({children}) {
  const { user } = UserAuth();
  return user?.email ? children : <Navigate to="/"/>;
      
    
  
}

export default ProtectedRoute
