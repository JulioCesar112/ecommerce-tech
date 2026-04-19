import { useEffect, useState } from "react";
import { getProducts } from "../services/productServices";

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
  },[])

  return {products, loading}
  
}