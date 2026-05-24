import { useState } from 'react'
import './App.css'
import Menu from './components/Menu'
import Cart from './components/Cart'
import Customizer from './components/Customizer'
import Checkout from './components/Checkout'
import { pizzas } from './data/pizzas'

function App() {
  const [cart, setCart] = useState([])
  const [showCustomizer, setShowCustomizer] = useState(false)
  const [selectedPizza, setSelectedPizza] = useState(null)
  const [isCheckout, setIsCheckout] = useState(false)
  const [orderNumber, setOrderNumber] = useState(null)

  const handleAddPizza = (pizza) => {
    setSelectedPizza(pizza)
    setShowCustomizer(true)
  }

  const handleConfirmCustomization = (customizedItem) => {
    setCart([...cart, { ...customizedItem, cartId: Date.now() }])
    setShowCustomizer(false)
    setSelectedPizza(null)
  }

  const handleRemoveFromCart = (cartId) => {
    setCart(cart.filter(item => item.cartId !== cartId))
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
  }

  const totalPrice = cart.reduce((sum, item) => sum + item.totalPrice, 0)

  return (
    <div className="app">
      <header className="app-header">
        <h1>🍕 Pizza Palace</h1>
        <p>Welcome to our self-service ordering kiosk!</p>
      </header>

      <div className="app-container">
        {isCheckout ? (
          <Checkout orderNumber={orderNumber} totalPrice={totalPrice} onNewOrder={handleResetOrder} />
        ) : (
          <>
            <Menu pizzas={pizzas} onAddPizza={handleAddPizza} />
            <Cart 
              items={cart} 
              totalPrice={totalPrice}
              onRemoveItem={handleRemoveFromCart}
              onPlaceOrder={handlePlaceOrder}
            />
          </>
        )}
      </div>

      {showCustomizer && selectedPizza && (
        <Customizer
          pizza={selectedPizza}
          onConfirm={handleConfirmCustomization}
          onCancel={() => {
            setShowCustomizer(false)
            setSelectedPizza(null)
          }}
        />
      )}
    </div>
  )
}

export default App
