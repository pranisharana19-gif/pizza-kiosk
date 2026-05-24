import { useState } from 'react'
import { sizes, toppings } from '../data/pizzas'
import './styles/Customizer.css'

function Customizer({ pizza, onConfirm, onCancel }) {
  const [selectedSize, setSelectedSize] = useState('medium')
  const [selectedToppings, setSelectedToppings] = useState([])

  const currentSize = sizes.find(s => s.value === selectedSize)
  const sizePrice = currentSize.priceModifier
  const toppingPrice = selectedToppings.reduce((sum, topId) => {
    const topping = toppings.find(t => t.id === topId)
    return sum + (topping ? topping.price : 0)
  }, 0)

  const totalPrice = pizza.basePrice + sizePrice + toppingPrice

  const handleToppingToggle = (toppingId) => {
    setSelectedToppings(prev =>
      prev.includes(toppingId)
        ? prev.filter(id => id !== toppingId)
        : [...prev, toppingId]
    )
  }

  const handleConfirm = () => {
    const customizedItem = {
      ...pizza,
      size: selectedSize,
      toppings: selectedToppings.map(id => toppings.find(t => t.id === id)),
      totalPrice,
    }
    onConfirm(customizedItem)
  }

  return (
    <div className="customizer-overlay" onClick={onCancel}>
      <div className="customizer" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onCancel}>✕</button>
        <h2>Customize Your {pizza.name}</h2>

        <div className="customizer-section">
          <h3>Select Size</h3>
          <div className="size-options">
            {sizes.map(size => (
              <label key={size.value} className="size-option">
                <input
                  type="radio"
                  name="size"
                  value={size.value}
                  checked={selectedSize === size.value}
                  onChange={e => setSelectedSize(e.target.value)}
                />
                <span className="size-label">
                  {size.name}
                  {size.priceModifier > 0 && ` (+$${size.priceModifier})`}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="customizer-section">
          <h3>Add Toppings</h3>
          <div className="toppings-grid">
            {toppings.map(topping => (
              <label key={topping.id} className="topping-option">
                <input
                  type="checkbox"
                  checked={selectedToppings.includes(topping.id)}
                  onChange={() => handleToppingToggle(topping.id)}
                />
                <span className="topping-label">
                  {topping.name} (+${topping.price.toFixed(2)})
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="customizer-footer">
          <div className="price-display">
            <span className="label">Total Price:</span>
            <span className="price">${totalPrice.toFixed(2)}</span>
          </div>
          <button className="confirm-button" onClick={handleConfirm}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Customizer
