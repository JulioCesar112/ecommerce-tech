import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const { useLogin, loading } = useAuth();

  const onSubmit = async (data) => {
    try {
      await useLogin(data);
    } catch (error) {
      console.error("Error in login");
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="login-input"
        placeholder="Email"
        {...register("email", { required: true })}
      />

      <input
        className="login-input"
        type="password"
        placeholder="Password"
        {...register("password", { required: true })}
      />

      <button className="login-button" type="submit" disabled={loading}>
        {loading ? "Loading..." : "Login"}
      </button>
    </form>
  );
};

export default LoginForm