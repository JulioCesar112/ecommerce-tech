
import { useProducts } from "../features/products/hooks/useProducts";
import ProductList from "../features/products/components/ProductList";
import Navbar from "../components/common/Navbar";

const Home = () => {
  const { products, loading } = useProducts();

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div>
      <Navbar />
      <h1>Productos</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Home;