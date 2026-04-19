import { useForm } from "react-hook-form"
import { useAuth } from "../hooks/useAuth"


const LoginForm = () => {

  const { register, handleSubmit } = useForm()
  const { login, loading } = useAuth()

  const onSubmit = async (data) => {
    try {
      const res = await login(data)
      console.log("Users Loged",res)
    } catch (error) {
      console.error("Error in loginform")
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <input
        placeholder="email"
        {...register("email", { required: true })} />

      <input
        type="password"
        placeholder="password"
        {...register("password", { required: true })}
      />

      <button type="submit" disabled={ loading }>
        { loading ? "Cargando..." : "Login"}
      </button>
    </form>
  )
}

export default LoginForm