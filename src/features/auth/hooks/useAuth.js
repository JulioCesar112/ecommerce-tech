import { loginUser } from "../services/authService";
import { saveToken } from "../../../services/storage";
import { useState } from "react";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);

  const login = async (formData) => {
    try {
      setLoading(true);

      const data = await loginUser(formData);

      // guardar token
      saveToken(data.token);

      return data;
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    login,
    loading
  };
};