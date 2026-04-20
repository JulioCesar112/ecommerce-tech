import axiosClient from "../../../services/axiosClient"

export const loginUser = async (data) => {
  try {
    const response = await axiosClient.post("/auth/login", data)
    return response.data
  } catch (error) {
    console.error("Error in authService login", error)
    throw error
  }
}

export const registerUser = async (data) => {
  try {
    const response = await axiosClient.post("/auth/register", data)
    return response.data
  } catch (error) {
    console.error("Error in authSerice Register", error)
    throw error
  }
}