# Pizza Palace — Ordering Kiosk 🍕

A self-service pizza ordering kiosk built with React. Perfect for learning React fundamentals like components, state management, and event handling.

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation & Running

```bash
# Clone the repository
git clone https://github.com/pranisharana19-gif/pizza-kiosk.git
cd pizza-kiosk

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will open at `http://localhost:5173` (or the next available port).

## Project Structure

```
src/
├── App.jsx              # Main app component
├── App.css              # App styling
├── data/
│   └── pizzas.js        # Menu data
└── components/
    ├── Menu.jsx         # Menu display
    ├── PizzaCard.jsx    # Individual pizza card
    ├── Customizer.jsx   # Pizza customization modal
    ├── Cart.jsx         # Shopping cart
    ├── CartItem.jsx     # Individual cart item
    ├── Checkout.jsx     # Order confirmation
    └── styles/          # Component-specific styles
        ├── Menu.css
        ├── PizzaCard.css
        ├── Customizer.css
        ├── Cart.css
        ├── CartItem.css
        └── Checkout.css
```

## Features

### Core Features ✅
- **Menu Page**: Browse 5+ pizzas with name, description, base price, and emoji
- **Customization**: Select size (Small/Medium/Large) and toppings
- **Shopping Cart**: Add, view, and remove items with running total
- **Checkout**: Place order and see confirmation with order number
- **Responsive Design**: Works on desktop, tablet, and mobile

### Stretch Goals Completed
- [ ] Quantity controls (+/- buttons)
- [ ] Tax & total breakdown
- [ ] Category filters (Veggie/Meat/Classic)
- [ ] LocalStorage persistence
- [ ] Smooth animations
- [ ] Dark mode toggle
- [ ] Promo code (PIZZA10)

## How to Use

1. **Browse**: Look at available pizzas on the menu
2. **Customize**: Click "Add to Order" to customize size and toppings
3. **Review**: Items appear in your cart on the right
4. **Adjust**: Remove items or change quantities as needed
5. **Checkout**: Click "Place Order" to confirm and see your order number

## Challenges & Solutions

*Add your reflections here as you build!*

## Technologies Used

- **React** 18+ (Components, Hooks, State)
- **Vite** (Build tool)
- **CSS3** (Flexbox, Grid)
- **JavaScript ES6+**

## Notes for Development

- Keep state in `App.jsx` and pass down via props
- Use React DevTools for debugging
- Each component should be responsible for one thing
- Lists are rendered with `.map()` and proper `key` props
- No inline styles—all CSS in separate files

---

**Made with ❤️ and 🍕**
