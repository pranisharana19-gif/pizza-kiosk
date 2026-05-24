import MenuItem from './MenuItem'
import './styles/Menu.css'

function Menu({ items, onAddItem }) {
  return (
    <div className="menu">
      <div className="menu-grid">
        {items.map(item => (
          <MenuItem
            key={item.id}
            item={item}
            onAddItem={onAddItem}
          />
        ))}
      </div>
    </div>
  )
}

export default Menu
