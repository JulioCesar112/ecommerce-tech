import { useForm } from "react-hook-form"
import { useCategories } from "../hooks/useCategories"



const CategoryForm = ({createCategory}) => {
  const { register, handleSubmit } = useForm()

  const onSubmit = async (data) => {
    try {
      const res = await createCategory(data)
      console.log("Category Created", res)
    } catch (error) {
      console.error("Error in categoriForm", error)
    }
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="name"
        {...register("name", { required: true })}
      />

      <button type="submit">Create</button>
    </form>
  )
}


export default CategoryForm