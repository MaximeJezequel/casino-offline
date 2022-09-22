import { Navigate, Outlet } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"

const ProtectedRoute = () => {
  const { user } = UserAuth()

  // return user && user.email ? <Outlet /> : <Navigate to="/login" />
  return user.accessToken ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoute
