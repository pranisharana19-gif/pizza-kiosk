import './styles/MenuItem.css'

function MenuItem({ item, onAddItem }) {
  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/250x250?text=' + encodeURIComponent(item.name)
  }

  return (
    <div className="menu-item">
      <div className="item-image-wrapper">
        <img 
          src={item.image} 
          alt={item.name}
          className="item-image"
          onError={handleImageError}
          loading="lazy"
        />
        <div className="item-overlay">
          <button 
            className="quick-add-button"
            onClick={() => onAddItem(item)}
          >
            + Add
          </button>
        </div>
      </div>
      
      <div className="item-info">
        <h3>{item.name}</h3>
        <p className="item-description">{item.description}</p>
        <div className="item-footer">
          <span className="item-price">${item.basePrice.toFixed(2)}</span>
          <button 
            className="add-button"
            onClick={() => onAddItem(item)}
          >
            🛒 Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default MenuItem
