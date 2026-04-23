import { Link } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
import "./Register.css";

const Register = () => {
  return (
    <div className="register-page">
      <div className="register-container">
        <h1 className="register-title">Register</h1>

        <RegisterForm />

        <Link to="/" className="register-home-link">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Register;