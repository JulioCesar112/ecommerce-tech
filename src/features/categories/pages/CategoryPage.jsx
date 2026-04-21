import CategoryForm from "../components/CategoryForm"
import CategoryList from "../components/CategoryList"
import { useCategories } from "../hooks/useCategories"

const CategoryPages = () => {

  const { categories, createCategory } = useCategories()

  return (
    <div>
      <h1>Categories</h1>
      <CategoryForm createCategory={createCategory} />
      <CategoryList categories={categories} />
    </div>
  )
}

export default CategoryPages