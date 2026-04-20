import { useForm } from "react-hook-form"
import { useAuth } from "../hooks/useAuth"
import { getToken } from "../../../services/storage"


const LoginForm = () => {

  const { register, handleSubmit } = useForm()
  const { useLogin, loading } = useAuth()

  const onSubmit = async (data) => {
    try {
      const res = await useLogin(data)
      console.log("Users Loged",data)
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

      <button type="submit" disabled={loading}>
        {loading ? "Cargando..." : "Login"}
      </button>
    </form>
  )
}

export default LoginForm