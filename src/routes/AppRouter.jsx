import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../features/auth/pages/Login"
import Register from "../features/auth/pages/Register"
import PrivateRouter from "./PrivateRouter"
import Dashboard from "../features/admin/page/Dashboard"



const AppRouter = () => {
  return (
    <div className="app-body">
      <Routes>
        <Route
          path="/admin"
          element={
            <PrivateRouter requireAdmin={true}>
              <Dashboard />
            </PrivateRouter>
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}


export default AppRouter