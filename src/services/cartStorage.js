export const getCart = () => {
  const cart = localStorage.getItem("cart")
  return cart ? JSON.parse(cart) : []
}

export const saveCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart))
}

export const addToCart = (product) => {
  const cart = getCart()

  const existing = cart.find(p => p.id === product.id)

  if (existing) {
    existing.quantity += 1
  } else {
    cart.push({ ...product, quantity: 1 })
  }

  saveCart(cart)
}