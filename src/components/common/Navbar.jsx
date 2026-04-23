import { Link } from "react-router-dom"
import "./Navbar.css"
import { BsCart4 } from "react-icons/bs";
const Navbar = () => {

  return (
    <nav className="navbar-home">
      <div className="navbar-logo">
        <Link to="/">Ecommerce-Juliolab</Link>
      </div>

      <div className="navbar-links">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link>Orders</Link>
        <Link className="navbar-cart"><BsCart4 /></Link>
      </div>
    </nav>
  )
}

export default Navbar