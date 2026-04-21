import axiosClient from "../../../services/axiosClient"


export const getCategories =async() =>{
  try {
    const response = await axiosClient.get("/categories")
    return response.data
  } catch (error) {
    console.log(error)
    throw error
  }
} 

export const postCategory = async (data) => {
  try {
    const response = await axiosClient.post("/categories",data)
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}