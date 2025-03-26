import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { useShoppingCart } from '../ShoppingCartContext'; // Import the hook
import './Navbar.css';

const Navbar = () => {
  const { cart } = useShoppingCart(); // Access the cart state

  return (
    <div className="navbar-container">
      {/* Logo */}
      <div className="navbar-logo">
        <span>Chai...</span>
      </div>

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/product">Products</Link>
        </li>
       
        <li>
          <Link to="/blog">Blog</Link> 
        </li>
        <li>
          <Link to="/footer">Contact</Link>
        </li>
      </ul>

     
      <div className="navbar-icons">
        <Link to="/cart" className="cart-icon">
          <ShoppingCart className="icon" />
          <span className="cart-count">{cart.length}</span>
        </Link>
        <Link to="/wishlist">
          <Heart className="icon" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;