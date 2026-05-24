import { useState } from 'react'
import './App.css'
import Menu from './components/Menu'
import Cart from './components/Cart'
import Customizer from './components/Customizer'
import Checkout from './components/Checkout'
import { pizzas, categories } from './data/pizzas'

function App() {
  const [cart, setCart] = useState([])
  const [showCustomizer, setShowCustomizer] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const [isCheckout, setIsCheckout] = useState(false)
  const [orderNumber, setOrderNumber] = useState(null)
  const [activeCategory, setActiveCategory] = useState('pizzas')

  const handleAddItem = (item) => {
    if (item.customizable) {
      setSelectedItem(item)
      setShowCustomizer(true)
    } else {
      // For non-customizable items, add directly to cart
      const finalItem = {
        ...item,
        cartId: Date.now(),
        totalPrice: item.basePrice,
        quantity: 1,
      }
      setCart([...cart, finalItem])
    }
  }

  const handleConfirmCustomization = (customizedItem) => {
    setCart([...cart, { ...customizedItem, cartId: Date.now() }])
    setShowCustomizer(false)
    setSelectedItem(null)
  }

  const handleRemoveFromCart = (cartId) => {
    setCart(cart.filter(item => item.cartId !== cartId))
  }

  const handleUpdateQuantity = (cartId, quantity) => {
    if (quantity <= 0) {
      handleRemoveFromCart(cartId)
    } else {
      setCart(cart.map(item => 
        item.cartId === cartId 
          ? { ...item, quantity, totalPrice: item.basePrice * quantity }
          : item
      ))
    }
  }

  const handlePlaceOrder = () => {
    const newOrderNumber = Math.floor(100000 + Math.random() * 900000)
    setOrderNumber(newOrderNumber)
    setIsCheckout(true)
  }

  const handleResetOrder = () => {
    setCart([])
    setIsCheckout(false)
    setOrderNumber(null)
    setActiveCategory('pizzas')
  }

  const filteredItems = pizzas.filter(item => item.category === activeCategory)
  const totalPrice = cart.reduce((sum, item) => sum + item.totalPrice, 0)
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0)

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>🍕 Pizza Palace</h1>
          <p>Your Favorite Food, Your Way!</p>
        </div>
      </header>

      <div className="app-container">
        {isCheckout ? (
          <Checkout orderNumber={orderNumber} totalPrice={totalPrice} onNewOrder={handleResetOrder} />
        ) : (
          <>
            <div className="main-content">
              <div className="category-tabs">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
                    onClick={() => setActiveCategory(cat.id)}
                  >
                    <span className="tab-icon">{cat.icon}</span>
                    <span className="tab-label">{cat.label}</span>
                  </button>
                ))}
              </div>
              <Menu items={filteredItems} onAddItem={handleAddItem} />
            </div>
            <Cart 
              items={cart}
              totalPrice={totalPrice}
              totalItems={totalItems}
              onRemoveItem={handleRemoveFromCart}
              onUpdateQuantity={handleUpdateQuantity}
              onPlaceOrder={handlePlaceOrder}
            />
          </>
        )}
      </div>

      {showCustomizer && selectedItem && (
        <Customizer
          item={selectedItem}
          onConfirm={handleConfirmCustomization}
          onCancel={() => {
            setShowCustomizer(false)
            setSelectedItem(null)
          }}
        />
      )}
    </div>
  )
}

export default App
