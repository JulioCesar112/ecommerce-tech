import axiosClient from "../../../services/axiosClient"



export const getProducts = async () => {
    try {
        const response = await axiosClient.get("/products")
        return response.data
    } catch (error) {
        console.error("Error in ProductServices", error)
        throw error
    }
}