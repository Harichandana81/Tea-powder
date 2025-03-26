import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import products from "./Data";
import "../Components/ProductDetails.css";
import { useShoppingCart } from "../ShoppingCartContext"; // Import the hook

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [offerPrice, setOfferPrice] = useState(0);
  const { addToCart } = useShoppingCart(); // Use the hook to get addToCart function

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);
    if (foundProduct) {
      setOfferPrice(foundProduct.price);
    }
  }, [id]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
    updateOfferPrice(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
      updateOfferPrice(quantity - 1);
    }
  };

  const updateOfferPrice = (newQuantity) => {
    if (product) {
      const discount = 0.1;
      const totalPrice = product.price * newQuantity;
      const discountedPrice = totalPrice - totalPrice * discount;
      setOfferPrice(discountedPrice);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, quantity }); // Add the product to the cart with the selected quantity
      alert(`${product.title} added to cart!`); // Optional: Show a confirmation message
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-md-5">
          <Slider {...sliderSettings}>
            {product.image.map((_, index) => (
              <div key={index}>
                <img
                  src={product.image[index]}
                  alt={`Product ${index + 1}`}
                  className="img-fluid"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="text col-md-6">
          <h1>{product.title}</h1>
          <p>{product.dis}</p>
          <h2>Key Features</h2>
          <p>{product.point1}</p>
          <p>{product.point2}</p>
          <p className="h3">Rs.{product.price}</p>

          <div className="d-flex align-items-center mb-3">
            <button
              className="btn btn-outline-dark me-2"
              onClick={decreaseQuantity}
            >
              -
            </button>
            <span className="mx-2">{quantity}</span>
            <button
              className="btn btn-outline-dark me-2"
              onClick={increaseQuantity}
            >
              +
            </button>
          </div>

          <p className="h4 text-success">
            Offer Price: Rs.{offerPrice.toFixed(2)} (10% off)
          </p>

          <button className="btn btn-outline-dark" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;