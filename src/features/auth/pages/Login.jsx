import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <Link to="/">Home</Link>
      <LoginForm />
    </div>
  )
}

export default Login