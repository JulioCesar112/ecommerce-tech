import { getToken, getUser } from "../services/storage"
import { Navigate } from "react-router-dom"



const PrivateRouter = ({ children, requireAdmin = false }) => {
  const token = getToken()
  const user = getUser()

  if (!token) {
    return <Navigate to="/login" />
  }

  if (requireAdmin && user?.role !== "admin") {
    return <Navigate to="/" />
  }
  return children
}

export default PrivateRouter