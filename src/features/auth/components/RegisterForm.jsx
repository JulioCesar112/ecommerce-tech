import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";

const RegisterForm = () => {
  const { register, handleSubmit } = useForm();
  const { useRegister, loading } = useAuth();

  const onSubmit = async (data) => {
    try {
      await useRegister(data);
    } catch (error) {
      alert(error.response?.data?.message || "Error");
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="register-input"
        placeholder="Name"
        {...register("name", { required: true })}
      />

      <input
        className="register-input"
        placeholder="Email"
        {...register("email", { required: true })}
      />

      <input
        className="register-input"
        type="password"
        placeholder="Password"
        {...register("password", { required: true })}
      />

      <button className="register-button" type="submit" disabled={loading}>
        {loading ? "Creating..." : "Register"}
      </button>
    </form>
  );
};

export default RegisterForm;