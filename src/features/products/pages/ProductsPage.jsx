import ProductForm from "../components/ProductForm"
import ProductList from "../components/ProductList"
import { useProducts } from "../hooks/useProducts"

const ProductsPage = () => {

  const {create, loading, products} = useProducts()

  return (
    <div>
      <h1>Products</h1>
      <ProductForm create={create} loading={loading}/>
      <ProductList products={products}/>
    </div>
  )
}

export default ProductsPage