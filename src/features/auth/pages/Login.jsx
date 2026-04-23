import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">Login</h1>

        <LoginForm />

        <Link to="/" className="login-home-link">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Login;