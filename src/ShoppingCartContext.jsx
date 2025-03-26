// ShoppingCartContext.js
import React, { createContext, useContext, useState } from 'react';


// Create a context for the shopping cart
const ShoppingCartContext = createContext();

// Create a provider component
export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add an item to the cart
  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      // If the item already exists, update its quantity
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        )
      );
    } else {
      // If the item doesn't exist, add it to the cart
      setCart([...cart, item]);
    }
  };

  // Remove an item from the cart
  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  // Update the quantity of an item in the cart
  const updateQuantity = (itemId, newQuantity) => {
    setCart(
      cart.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Calculate the total price of the cart
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <ShoppingCartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, totalPrice }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

// Custom hook to use the shopping cart context
export const useShoppingCart = () => useContext(ShoppingCartContext);