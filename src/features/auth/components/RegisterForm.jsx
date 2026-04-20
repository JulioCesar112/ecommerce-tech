import { useForm } from "react-hook-form"
import { useAuth } from "../hooks/useAuth"
import { useState } from "react"

const RegisterForm = () => {
  const { register, handleSubmit } = useForm()
  const { useRegister, loading } = useAuth()

  const onSubmit = async (data) => {
    try {
      const res = await useRegister(data)
      console.log("User Register", res)
    } catch (error) {
      console.log("Error in RegisterForm")
      alert(error.response.data.message)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input placeholder="name"
        {...register("name", { required: true })}
      />
      <input placeholder="email"
        {...register("email", { required: true })}
      />

      <input type="password"
        placeholder="password"
        {...register("password", { required: true })}
      />

      <button type="submit" disabled={loading}>
        {loading ? "creando..." : "Register"}
      </button>
    </form>
  )
}

export default RegisterForm