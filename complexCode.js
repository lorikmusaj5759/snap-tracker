// filename: complexCode.js

// A complex JavaScript code that demonstrates a fictional e-commerce shopping cart system

// Define a class for the shopping cart
class ShoppingCart {
  constructor() {
    this.items = [];
    this.total = 0;
  }

  // Method to add items to the cart
  addItem(item, quantity) {
    const newItem = { item, quantity };
    this.items.push(newItem);
    this.total += item.price * quantity;
  }

  // Method to remove items from the cart
  removeItem(item, quantity) {
    const itemIndex = this.items.findIndex((cartItem) => cartItem.item === item);

    if (itemIndex !== -1) {
      if (this.items[itemIndex].quantity > quantity) {
        this.items[itemIndex].quantity -= quantity;
        this.total -= item.price * quantity;
      } else {
        this.total -= item.price * this.items[itemIndex].quantity;
        this.items.splice(itemIndex, 1);
      }
    }
  }

  // Method to calculate discounts and update the total price
  applyDiscount(discountPercentage) {
    const discount = (this.total * discountPercentage) / 100;
    this.total -= discount;
  }

  // Method to checkout and complete the purchase
  checkout() {
    if (this.total > 0) {
      console.log("Purchase completed!");
      // place an API call to process the payment and complete the purchase
      // ...
    } else {
      console.log("No items in the cart!");
    }
  }
}

// Define a class for items
class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// Create instances of the ShoppingCart and Item classes
const shoppingCart = new ShoppingCart();
const item1 = new Item("Product 1", 10);
const item2 = new Item("Product 2", 20);
const item3 = new Item("Product 3", 30);

// Add items to the cart
shoppingCart.addItem(item1, 2);
shoppingCart.addItem(item2, 1);
shoppingCart.addItem(item3, 3);

// Remove items from the cart
shoppingCart.removeItem(item2, 1);

// Apply discount to the total price
shoppingCart.applyDiscount(10);

// Checkout and complete the purchase
shoppingCart.checkout();