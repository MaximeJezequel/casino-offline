import { Navigate, Outlet } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"

const PrivateRoute = () => {
  const { user } = UserAuth()

  return user.email === "maxime.jezequel@gmail.com" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  )
}

export default PrivateRoute
