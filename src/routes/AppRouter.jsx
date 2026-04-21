import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../features/auth/pages/Login"
import Register from "../features/auth/pages/Register"
import PrivateRouter from "./PrivateRouter"
import Dashboard from "../features/admin/page/Dashboard"
import ProductsPage from "../features/products/pages/ProductsPage"
import CategoryPages from "../features/categories/pages/CategoryPage"



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
        >
          <Route path="products" element={<ProductsPage/>}/>
          <Route path="categories" element={<CategoryPages/>}/>

        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}


export default AppRouter