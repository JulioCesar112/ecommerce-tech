import { useForm } from "react-hook-form"
import { useProducts } from "../hooks/useProducts"




const ProductForm = () => {
  const { register, handleSubmit } = useForm()
  const { create, loading } = useProducts()

  const onSubmit = async (data) => {
    try {
      const res = await create(data)
      console.log("Product Created", res)
    } catch (error) {
      console.error("Error in producForm", error)
      alert(error.response.data.message)

    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="name"
        {...register("name", { required: true })}
      />

      <input
        placeholder="price"
        {...register("price", { required: true })}
      />

      <input
        placeholder="upc"
        {...register("upc", { required: true })}
      />

      <input
        placeholder="categoryId"
        {...register("categoryId", { required: true })}
      />

      <input
        placeholder="image"
        {...register("image", { required: true })}
      />

      <button type="submit" disabled={loading}>
        {loading ? "creando..." : "create Product"}
      </button>
    </form>
  )
}

export default ProductForm