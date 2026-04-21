import { Link, Outlet } from "react-router-dom"



const Dashboard = () => {
  return (
    <div>
      <h1>Panel Admin</h1>
      <nav>
        <Link to="/admin/products">Productos</Link>
        <Link to="/admin/categories">Categorías</Link>
        <Link to="/admin/users">Usuarios</Link>
      </nav>

      <Outlet />
    </div>
  )
}

export default Dashboard