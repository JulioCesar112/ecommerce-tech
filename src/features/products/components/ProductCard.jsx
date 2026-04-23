import "./Product.css"
import { useNavigate } from "react-router-dom"
import { getToken } from "../../../services/storage"
import { addToCart } from "../../../services/cartStorage"

const ProductCard = ({ product }) => {

  const navigate = useNavigate()

  const handleAddToCart = () => {
    const token = getToken()

    if (!token) {
      navigate("/login")
      return
    }

    addToCart(product)

    alert("Product added to cart 🛒")
  }

  return (
    <div className="product-card">
      
      <div className="product-image-container">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-price">${product.price}</p>

        <button 
          className="product-button"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>

    </div>
  )
}

export default ProductCard