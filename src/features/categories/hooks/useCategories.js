import { useEffect, useState } from "react";
import { postCategory, getCategories } from "../services/categoryService";

export const useCategories = () => {

  const [categories, setCategories] = useState([])

  const fetchCategories = async () => {
    try {
      const data = await getCategories()
      setCategories(data)
    } catch (error) {
      console.error("Error in useCategories fetch", error)
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  const createCategory = async (formData) => {
    try {
      const data = await postCategory(formData)
      await fetchCategories()
      return data
    } catch (error) {
      console.error("Error in useCategories create")
    }
  }

  return {
    categories,
    createCategory,
  }
}