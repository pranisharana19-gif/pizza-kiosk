# Testing Guide for Pizza Palace Kiosk

## Manual Testing Checklist

### Menu & Browsing
- [ ] All 6 pizzas display correctly
- [ ] Pizza cards show name, description, emoji, price
- [ ] Category filter buttons work (All, Meat, Veggie, Classic)
- [ ] Correct number of pizzas show for each category
- [ ] Pizza cards are responsive on mobile/tablet/desktop

### Pizza Customization
- [ ] Clicking "Add to Order" opens customizer modal
- [ ] Modal displays pizza name and close button
- [ ] Size options are selectable (Small, Medium, Large)
- [ ] Price updates based on size selection
- [ ] All 12 toppings are displayed
- [ ] Toppings can be checked/unchecked
- [ ] Price updates when toppings are added/removed
- [ ] Quantity can be increased and decreased
- [ ] Quantity cannot go below 1
- [ ] Price summary shows accurate totals
- [ ] "Cancel" button closes modal without adding
- [ ] "Add to Cart" button adds item with all selections

### Shopping Cart
- [ ] Cart updates when items are added
- [ ] Item count badge shows correct number
- [ ] Items display with correct:
  - Name
  - Size
  - Toppings (if any)
  - Price
  - Quantity
- [ ] Quantity +/- buttons work in cart
- [ ] Remove button (trash icon) deletes item
- [ ] Subtotal is calculated correctly
- [ ] Tax (8%) is calculated correctly
- [ ] Total is accurate (subtotal + tax)
- [ ] Empty cart shows message with emoji
- [ ] Cart displays correctly on all screen sizes

### Checkout & Confirmation
- [ ] "Place Order" button disabled when cart is empty
- [ ] "Place Order" button enabled with items
- [ ] Clicking "Place Order" shows checkout screen
- [ ] Order number is displayed (6 digits)
- [ ] Estimated time shows between 25-40 minutes
- [ ] Order summary can be toggled
- [ ] Summary shows correct subtotal, tax, total
- [ ] Success animation displays (checkmark)
- [ ] "Start New Order" button resets cart
- [ ] Cart becomes empty after new order
- [ ] Menu resets to "All Pizzas" category

### Mobile Responsiveness (320px - 480px)
- [ ] Layout stacks vertically
- [ ] Text is readable without zooming
- [ ] Buttons are large enough to tap (44px+)
- [ ] Pizza cards display in single column
- [ ] Cart moves below menu on mobile
- [ ] Modals are full-height and scrollable
- [ ] No horizontal overflow
- [ ] Touch interactions work smoothly
- [ ] All features functional on mobile

### Tablet Responsiveness (481px - 768px)
- [ ] Menu and cart can both be visible
- [ ] Pizza grid shows 2 columns
- [ ] Buttons and text are appropriately sized
- [ ] Navigation is clear and accessible
- [ ] All features work without issues

### Desktop Responsiveness (769px+)
- [ ] Side-by-side menu and cart layout
- [ ] Cart stays sticky as you scroll
- [ ] Pizza grid shows 3+ columns
- [ ] Hover effects work on cards
- [ ] All animations play smoothly

### Accessibility
- [ ] Can navigate with keyboard (Tab, Enter)
- [ ] Screen reader announces buttons properly
- [ ] Color contrast is sufficient
- [ ] Focus states are visible
- [ ] All interactive elements are accessible

### Performance
- [ ] Page loads quickly
- [ ] No console errors
- [ ] Animations are smooth (60fps)
- [ ] Buttons respond immediately
- [ ] No lag when adding/removing items

### Cross-browser Testing
Test on:
- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers

### Cross-device Testing
Test on:
- [ ] iPhone (small screen)
- [ ] iPad (medium screen)
- [ ] Android phone
- [ ] Desktop monitor

## Automated Testing (Future)

### Unit Tests
```bash
npm install --save-dev vitest @testing-library/react
```

Example test:
```javascript
import { render, screen } from '@testing-library/react'
import PizzaCard from '../components/PizzaCard'

test('renders pizza name', () => {
  const pizza = { name: 'Margherita', /* ... */ }
  render(<PizzaCard pizza={pizza} onAddItem={() => {}} />)
  expect(screen.getByText('Margherita')).toBeInTheDocument()
})
```

### Integration Tests
- Test complete user flows
- Verify cart calculations
- Test checkout process

### E2E Tests
```bash
npm install --save-dev cypress
```

## Test Scenarios

### Scenario 1: Complete Order
1. Start with empty cart
2. Filter to "Meat" category
3. Add Pepperoni Blast (Medium, Pepperoni, Sausage topping)
4. Verify price is correct
5. Add Meat Lovers (Large, all toppings)
6. Increase first item quantity to 2
7. Remove Meat Lovers
8. Place order
9. Verify order number and total
10. Start new order
11. Verify cart is empty

### Scenario 2: Mobile Ordering
1. Open on mobile device
2. Category filter works
3. Tap pizza to customize
4. All size options selectable
5. Toppings scroll properly
6. Add to cart works
7. Cart items display correctly
8. Quantity controls work
9. Checkout works on small screen
10. All text readable

### Scenario 3: Price Accuracy
1. Add Margherita (Medium, no toppings): $12.99 × 1.25 = $16.24
2. Add topping ($0.75): $16.24 + $0.75 = $16.99
3. Subtotal: $16.99
4. Tax (8%): $1.36
5. Total: $18.35

## Bug Report Template

When testing, use this format for bugs:
```
Title: [Component] Brief description

Browser/Device: Chrome on iPhone 12
Steps to Reproduce:
1. Step 1
2. Step 2
3. Step 3

Expected Result:
What should happen

Actual Result:
What actually happens

Screenshots:
[Attach image if possible]
```

## Performance Benchmarks

Target metrics:
- First Contentful Paint: < 2 seconds
- Time to Interactive: < 3 seconds
- Largest Contentful Paint: < 2.5 seconds
- Cumulative Layout Shift: < 0.1

Check with:
```bash
npm run build
npm run preview
# Open DevTools > Lighthouse
```

## Quality Assurance Checklist

Before each release:
- [ ] All manual tests pass
- [ ] No console errors/warnings
- [ ] Lighthouse score 90+
- [ ] Cross-browser tested
- [ ] Mobile tested on real devices
- [ ] Accessibility checked
- [ ] Performance acceptable
- [ ] Documentation updated
- [ ] CHANGELOG updated
- [ ] Version bumped
