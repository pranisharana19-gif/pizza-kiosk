import './styles/Checkout.css'

function Checkout({ orderNumber, totalPrice, onNewOrder }) {
  return (
    <div className="checkout-container">
      <div className="checkout-card">
        <div className="success-icon">✓</div>
        <h1>Order Confirmed!</h1>
        <p className="confirmation-text">Thank you for your order</p>
        
        <div className="order-details">
          <div className="detail-item">
            <span className="detail-label">Order Number</span>
            <span className="detail-value">{orderNumber}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Total Amount</span>
            <span className="detail-value">${totalPrice.toFixed(2)}</span>
          </div>
        </div>

        <p className="pickup-text">Your delicious pizza will be ready in 15-20 minutes!</p>

        <button className="new-order-button" onClick={onNewOrder}>
          Start New Order
        </button>
      </div>
    </div>
  )
}

export default Checkout
