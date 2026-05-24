// Menu data for Pizza Palace
export const pizzas = [
  {
    id: 1,
    name: "Classic Margherita",
    emoji: "🍅",
    description: "Fresh mozzarella, basil, and tomato sauce",
    basePrice: 10.99,
  },
  {
    id: 2,
    name: "Pepperoni Paradise",
    emoji: "🌶️",
    description: "Loaded with pepperoni and mozzarella cheese",
    basePrice: 11.99,
  },
  {
    id: 3,
    name: "Veggie Garden",
    emoji: "🥦",
    description: "Bell peppers, mushrooms, olives, and onions",
    basePrice: 10.49,
  },
  {
    id: 4,
    name: "Meat Lovers",
    emoji: "🍖",
    description: "Pepperoni, sausage, bacon, and ham",
    basePrice: 13.99,
  },
  {
    id: 5,
    name: "BBQ Chicken",
    emoji: "🍗",
    description: "Grilled chicken, BBQ sauce, and red onions",
    basePrice: 12.49,
  },
  {
    id: 6,
    name: "Hawaiian Twist",
    emoji: "🍍",
    description: "Pineapple, ham, and jalapeños (controversial!)",
    basePrice: 11.99,
  },
];

export const sizes = [
  { name: "Small (10'')", value: "small", priceModifier: 0 },
  { name: "Medium (12'')", value: "medium", priceModifier: 3 },
  { name: "Large (14'')", value: "large", priceModifier: 6 },
];

export const toppings = [
  { id: 1, name: "Extra Cheese", price: 1.5 },
  { id: 2, name: "Mushrooms", price: 1.0 },
  { id: 3, name: "Olives", price: 1.0 },
  { id: 4, name: "Onions", price: 0.5 },
  { id: 5, name: "Peppers", price: 0.75 },
  { id: 6, name: "Pineapple", price: 1.5 },
  { id: 7, name: "Jalapeños", price: 0.75 },
  { id: 8, name: "Spinach", price: 0.75 },
];
