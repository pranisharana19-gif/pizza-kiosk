import CartItem from './CartItem'
import './styles/Cart.css'

function Cart({ items, totalPrice, onRemoveItem, onPlaceOrder }) {
  return (
    <div className="cart">
      <h2>🛒 Your Cart</h2>
      
      {items.length === 0 ? (
        <div className="empty-cart">
          <p>🍕</p>
          <p>Your cart is hungry!</p>
          <p className="empty-hint">Add some pizzas to get started</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {items.map(item => (
              <CartItem
                key={item.cartId}
                item={item}
                onRemove={() => onRemoveItem(item.cartId)}
              />
            ))}
          </div>
          <div className="cart-footer">
            <div className="total">
              <span>Total:</span>
              <span className="total-price">${totalPrice.toFixed(2)}</span>
            </div>
            <button className="place-order-button" onClick={onPlaceOrder}>
              Place Order 🎉
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
