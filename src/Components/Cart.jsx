import React from 'react';
import { useShoppingCart } from '../ShoppingCartContext'; // Import the hook
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useShoppingCart();

  return (
    <div className="container my-5 py-5">
      <h1>Add to Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/product">Continue shopping</Link></p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-3">
                    {/* Display the product image */}
                    <img
                      src={item.image[0]} // Use the first image in the array
                      alt={item.title}
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-9 d-flex flex-column justify-content-center">
                    {/* Centered content */}
                    <h5 className="card-title text-center">{item.title}</h5>
                    <p className="card-text text-center">Rs.{item.price}</p>
                    <div className="d-flex align-items-center justify-content-center">
                      <button
                        className="btn btn-outline-dark me-2"
                        onClick={() =>
                          updateQuantity(item.id, Math.max(1, item.quantity - 1))
                        }
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        className="btn btn-outline-dark me-2"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                      <button
                        className="btn btn-warning" // Change the button color to yellow
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <h3>Total Price: Rs.{totalPrice.toFixed(2)}</h3>
          <Link to="/paymentpage" className="btn btn-primary">
            Proceed to Checkout
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;