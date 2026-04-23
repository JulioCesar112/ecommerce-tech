import { Link } from "react-router-dom"
import RegisterForm from "../components/RegisterForm"

const Register = () => {
    return(
        <div>
            <h1>Register</h1>
            <Link to="/">Home</Link>
            <RegisterForm/>
        </div>
    )
}

export default Register