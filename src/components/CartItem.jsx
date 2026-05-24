import './styles/CartItem.css'

function CartItem({ item, onRemove }) {
  return (
    <div className="cart-item">
      <div className="item-info">
        <div className="item-header">
          <span className="item-emoji">{item.emoji}</span>
          <div className="item-details">
            <h4>{item.name}</h4>
            <p className="item-size">{item.size.charAt(0).toUpperCase() + item.size.slice(1)}</p>
          </div>
        </div>
        {item.toppings && item.toppings.length > 0 && (
          <div className="item-toppings">
            {item.toppings.map(topping => (
              <span key={topping.id} className="topping-tag">
                {topping.name}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="item-actions">
        <span className="item-price">${item.totalPrice.toFixed(2)}</span>
        <button className="remove-button" onClick={onRemove}>
          Remove
        </button>
      </div>
    </div>
  )
}

export default CartItem
