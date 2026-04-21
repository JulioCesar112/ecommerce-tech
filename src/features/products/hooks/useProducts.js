import { useEffect, useState } from "react";
import { createProduct, getProducts } from "../services/productServices";

export const useProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchProducts = async () => {
    try {
      const data = await getProducts()
      setProducts(data)

    } catch (error) {
      console.error("Error in useProducts", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const create = async (formData) => {
    try {
      const data = await createProduct(formData)
      return data
    } catch (error) {
      console.error("Error in useProducts create", error)
    } finally {
      setLoading(false)
    }
  }

  return { products, loading, create }

}