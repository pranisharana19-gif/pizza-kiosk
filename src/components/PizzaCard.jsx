import './styles/PizzaCard.css'

function PizzaCard({ pizza, onAddPizza }) {
  return (
    <div className="pizza-card">
      <div className="pizza-emoji">{pizza.emoji}</div>
      <h3>{pizza.name}</h3>
      <p className="pizza-description">{pizza.description}</p>
      <p className="pizza-price">From ${pizza.basePrice.toFixed(2)}</p>
      <button 
        className="add-button"
        onClick={() => onAddPizza(pizza)}
      >
        Add to Order →
      </button>
    </div>
  )
}

export default PizzaCard
