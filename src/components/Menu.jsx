import PizzaCard from './PizzaCard'
import './styles/Menu.css'

function Menu({ pizzas, onAddPizza }) {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <div className="pizza-grid">
        {pizzas.map(pizza => (
          <PizzaCard
            key={pizza.id}
            pizza={pizza}
            onAddPizza={onAddPizza}
          />
        ))}
      </div>
    </div>
  )
}

export default Menu
