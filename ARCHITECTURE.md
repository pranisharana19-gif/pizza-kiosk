# Pizza Palace Architecture

## Project Structure

```
pizza-kiosk/
├── src/
│   ├── App.jsx                    # Main app component
│   ├── App.css                    # App styles
│   ├── main.jsx                   # React entry point
│   ├── components/
│   │   ├── Menu.jsx               # Pizza menu display
│   │   ├── PizzaCard.jsx          # Individual pizza card
│   │   ├── MenuItem.jsx           # Alternative menu item
│   │   ├── Customizer.jsx         # Pizza customization modal
│   │   ├── Cart.jsx               # Shopping cart container
│   │   ├── CartItem.jsx           # Individual cart item
│   │   ├── Checkout.jsx           # Order confirmation
│   │   └── styles/
│   │       ├── Menu.css
│   │       ├── PizzaCard.css
│   │       ├── MenuItem.css
│   │       ├── Customizer.css
│   │       ├── Cart.css
│   │       ├── CartItem.css
│   │       └── Checkout.css
│   └── data/
│       ├── pizzas.js              # Pizza menu data
│       └── menuItems.js           # Alternative menu data
├── public/
│   └── pizza-icon.svg             # Favicon
├── index.html                     # HTML entry point
├── vite.config.js                 # Vite configuration
├── package.json                   # Dependencies
├── .gitignore                     # Git ignore rules
├── .eslintrc.json                 # ESLint config
├── .prettierrc                    # Prettier config
├── .env.example                   # Environment variables
├── LICENSE                        # MIT License
├── README.md                      # Main documentation
├── CONTRIBUTING.md                # Contributing guide
├── FEATURES.md                    # Feature documentation
├── DEPLOYMENT.md                  # Deployment guide
├── TESTING.md                     # Testing guide
└── ARCHITECTURE.md                # This file
```

## Component Hierarchy

```
App
├── Header
├── Container
│   ├── Menu Display
│   │   └── PizzaCard[] (or MenuItem[])
│   │       └── Customizer (Modal)
│   │           ├── Size Selection
│   │           ├── Toppings Grid
│   │           ├── Quantity Control
│   │           └── Price Summary
│   └── Cart
│       ├── CartItem[]
│       │   └── Quantity Control
│       ├── Cart Summary
│       └── Checkout Button
└── Checkout Screen
    ├── Success Animation
    ├── Order Number
    ├── Preparation Time
    ├── Order Summary
    └── New Order Button
```

## Data Flow

### State Management

**App.jsx** (main state container):
```javascript
- cart: [] // Array of cart items
- showCustomizer: boolean // Modal visibility
- selectedItem: null | Pizza // For customization
- isCheckout: boolean // Show checkout screen
- orderNumber: number | null // Generated order number
- activeCategory: string // Current filter
```

### Props Flow

```
App
├── Menu (items, onAddItem)
│   └── PizzaCard (pizza, onAddItem)
│       └── Customizer (item, onConfirm, onCancel)
└── Cart (items, onRemoveItem, onUpdateQuantity, onPlaceOrder)
    └── CartItem (item, onRemove, onUpdateQuantity)
```

## Component Responsibilities

### App.jsx
- Manage global state
- Handle pizza selection
- Manage cart operations
- Control modals and screens
- Coordinate all components

### Menu.jsx
- Display grid of pizzas
- Show empty state
- Pass click handlers down

### PizzaCard.jsx
- Render individual pizza
- Display pizza details
- Handle add to order click
- Show pizza emoji/image

### Customizer.jsx
- Modal overlay and form
- Size selection radio buttons
- Toppings checkbox grid
- Quantity controls
- Price calculation and display
- Confirm/cancel handlers

### Cart.jsx
- Display cart items list
- Show cart summary
- Calculate tax
- Render checkout button
- Handle empty state

### CartItem.jsx
- Show individual item
- Display customizations
- Quantity +/- buttons
- Remove button
- Item price display

### Checkout.jsx
- Display success animation
- Show order number
- Estimated time
- Optional order summary
- New order button

## Styling Architecture

### CSS Organization
- **Component-scoped**: Each component has its own CSS
- **File structure**: `styles/ComponentName.css`
- **Mobile-first**: Base styles for mobile, media queries for larger
- **Consistent approach**: Flexbox/Grid for layouts

### Responsive Breakpoints
```css
Mobile:    320px - 480px
Tablet:    481px - 768px
Desktop:   769px - 1024px
Large:     1025px+
```

### Color Scheme
```
Primary Orange:     #ff6b35
Secondary Purple:   #667eea
Light Gray:         #f5f7fa, #f9f9f9
Dark Text:          #333, #666
Borders:            #ddd, #eee
```

## Data Models

### Pizza Object
```javascript
{
  id: number,
  name: string,
  description: string,
  emoji: string,
  basePrice: number,
  category: string, // 'classic' | 'meat' | 'veggie' | 'pizzas'
  customizable: boolean,
  image: string // emoji
}
```

### CartItem Object
```javascript
{
  ...pizza,
  cartId: number, // Unique ID for this cart entry
  selectedSize: string,
  selectedSizeLabel: string,
  selectedToppings: string[],
  toppingDetails: Topping[],
  basePrice: number, // Final price per unit
  totalPrice: number, // basePrice * quantity
  quantity: number
}
```

### Size Object
```javascript
{
  id: string,
  label: string,
  multiplier: number
}
```

### Topping Object
```javascript
{
  id: string,
  label: string,
  price: number
}
```

### Category Object
```javascript
{
  id: string,
  label: string,
  icon: string // emoji
}
```

## Business Logic

### Price Calculation
```
Price = (BasePrice × SizeMultiplier + ToppingsCost) × Quantity
```

### Tax Calculation
```
Tax = Subtotal × 0.08
Total = Subtotal + Tax
```

### Size Multipliers
- Small (10"):  1.0x
- Medium (12"): 1.25x
- Large (14"):  1.5x

### Default Values
- Default Size: Medium
- Default Quantity: 1
- Tax Rate: 8%
- Order Number: Random 6-digit number

## Performance Considerations

### Optimizations
- Component structure minimizes re-renders
- Props drilling is acceptable for this scale
- CSS animations use hardware acceleration
- No unnecessary state updates

### Future Improvements
- Context API for deeper component trees
- Redux/Zustand if state becomes complex
- Lazy loading for images
- Code splitting by route

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Modern mobile browsers

## Dependencies

### Production
- React 18.2.0+
- React DOM 18.2.0+

### Development
- Vite 5.0.0+ (build tool)
- ESLint (linting)
- Prettier (formatting)
- React DevTools (debugging)

## Security Considerations

- ✅ Input sanitization (basic)
- ✅ No sensitive data in frontend
- ✅ Use environment variables for config
- ✅ HTTPS for production
- ✅ Content Security Policy headers
- ✅ No eval() or innerHTML usage

## Testing Strategy

### Unit Tests
- Component rendering
- Props validation
- Event handlers
- Calculations

### Integration Tests
- Complete user flows
- Cart calculations
- State updates

### E2E Tests
- Full ordering workflow
- All category filters
- Mobile responsiveness

### Manual Testing
- Cross-browser
- Cross-device
- Accessibility
- Performance

## Future Architecture Improvements

### Planned Changes
1. **State Management**: Migrate to Context API or Zustand
2. **API Integration**: Connect to backend
3. **Authentication**: User accounts and order history
4. **Caching**: LocalStorage for persistence
5. **Code Splitting**: Lazy load routes/components
6. **Testing**: Add comprehensive test suite
7. **CI/CD**: Automated testing and deployment

### Scalability Notes
- Current architecture supports 50-100 pizzas
- Cart can handle 1000+ items
- Performance suitable for kiosk use
- Easy to add features without major refactoring

## Development Workflow

1. **Feature Development**: Create feature branch
2. **Testing**: Manual and automated tests
3. **Code Review**: Check style and functionality
4. **Build**: `npm run build`
5. **Preview**: `npm run preview`
6. **Deploy**: Push to main triggers deployment
7. **Monitor**: Watch for errors and metrics

---

For questions about architecture, see [Contributing Guide](CONTRIBUTING.md)
