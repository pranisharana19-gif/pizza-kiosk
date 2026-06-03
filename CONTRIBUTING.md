# Contributing to Pizza Palace Kiosk

Thank you for your interest in contributing! Here's how you can help:

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/pizza-kiosk.git`
3. Create a feature branch: `git checkout -b feature/your-feature-name`
4. Install dependencies: `npm install`
5. Start the dev server: `npm run dev`

## Development Guidelines

### Code Style
- Use ESLint and Prettier for consistent code formatting
- Run `npm run lint` before committing
- Run `npm run format` to auto-format code

### Component Development
- Keep components small and focused
- Use React Hooks for state management
- Add prop validation with PropTypes
- Write meaningful comments for complex logic

### Styling
- Use CSS Flexbox and Grid for layouts
- Ensure mobile responsiveness (test on 480px, 768px, 1024px)
- Follow the existing color scheme
- Use CSS variables where possible

### Testing
- Test on mobile devices and browsers
- Verify category filters work correctly
- Test customization flows
- Check cart calculations (including tax)
- Verify checkout functionality

## Submitting Changes

1. Commit your changes: `git commit -m "Add feature: description"`
2. Push to your fork: `git push origin feature/your-feature-name`
3. Create a Pull Request with:
   - Clear description of changes
   - Screenshots if UI changes
   - Testing notes

## Feature Ideas

### Easy
- [ ] Add more pizzas to menu
- [ ] New color themes
- [ ] LocalStorage persistence for cart
- [ ] Keyboard navigation

### Medium
- [ ] Category filters improvements
- [ ] Promo code system
- [ ] Quantity controls in menu
- [ ] Dark mode toggle
- [ ] Search functionality

### Hard
- [ ] Add to favorites feature
- [ ] Order history
- [ ] Payment integration
- [ ] Admin panel
- [ ] Database integration

## Reporting Issues

- Use clear, descriptive titles
- Include browser and device info
- Provide steps to reproduce
- Share screenshots when helpful

## Questions?

Feel free to open an issue to ask questions or discuss ideas!

Happy coding! 🍕
