import { loginUser, registerUser } from "../services/authService";
import { saveAuth } from "../../../services/storage";
import { useState } from "react";


export const useAuth = () => {
  const [loading, setLoading] = useState(false);

  /*auth de Login*/
  const useLogin = async (formData) => {
    try {
      setLoading(true);

      const data = await loginUser(formData);

      // guardar token
      saveAuth(data);

      return data;
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  /*auth de register*/
  const useRegister = async (formData) =>{
    try {
      setLoading(true)

      const data = registerUser(formData)
      return data 
    } catch (error) {
      console.error(error)
      throw error
    } finally {
      setLoading(false)
    }
  }

  return {
    useLogin,
    loading,
    useRegister
  };
};