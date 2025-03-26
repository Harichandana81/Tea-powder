import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { FaHeart, FaEye, FaShoppingCart } from "react-icons/fa"; // Icons for heart, eye, and cart
import products from "./Data";
import "./Products.css"; // Import a CSS file for animations

const Products = () => {
  const [data, setData] = useState(products);
  const [filter, setFilter] = useState(products);
  const [loading, setLoading] = useState(false);
  const [likedProducts, setLikedProducts] = useState({}); // Track liked status for each product
  const [cartItems, setCartItems] = useState([]); // Track cart items

  // Function to handle like/unlike action for a specific product
  const handleLike = (productId) => {
    setLikedProducts((prevLikedProducts) => ({
      ...prevLikedProducts,
      [productId]: !prevLikedProducts[productId], // Toggle like status for the specific product
    }));
  };

  // Function to handle quick view action
  const handleQuickView = (product) => {
    alert(`Quick View: ${product.title}`); // Replace with a modal or detailed view
  };

  // Function to handle add to cart action
  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
    alert(`${product.title} added to cart!`); // Replace with a toast notification
  };

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("matchatea")}>Matcha Tea Powder</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("blackteapowder")}>Black Tea Powder</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("herbalteapowder")}>Herbal Tea Powder</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("senchateapowder")}>Sencha Tea Powder</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("oolongteapowder")}>Oolong Tea Powder</button>
        </div>
        <div className="row">
          {filter.map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card h-100 text-center p-4 position-relative">
                <img src={product.image[0]} className="card-img-top" alt={product.title} height="250px" />
                {/* Icons with Click Actions */}
                <div className="position-absolute top-0 end-0 m-2 d-flex flex-column icon-container">
                  <div
                    className="icon-background"
                    onClick={() => handleLike(product.id)} // Like/Unlike action for this product
                  >
                    <FaHeart
                      className="mb-2 icon"
                      size={20}
                      color={likedProducts[product.id] ? "red" : "#333"} // Change color if liked
                    />
                  </div>
                  <div
                    className="icon-background"
                    onClick={() => handleQuickView(product)} // Quick View action
                  >
                    <FaEye className="mb-2 icon" size={20} />
                  </div>
                  <div
                    className="icon-background"
                    onClick={() => handleAddToCart(product)} // Add to Cart action
                  >
                    <FaShoppingCart className="icon" size={20} />
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title mb-0">{product.title.substring(0, 12)}</h5>
                  <p className="card-text lead fw-bold">Rs.{product.price}</p>
                  <Link to={`/product/${product.id}`} className="btn btn-outline-dark">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;