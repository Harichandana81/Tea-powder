import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ShoppingCartProvider } from "./ShoppingCartContext"; 
import ProductDetails from "../src/Components/ProductDetails.jsx";
// import deliveryImage from "../src/assets/cc1.jpg";
import uni from '../src/assets/uuu.jpg'
import org from '../src/assets/ddd.jpg';
import fun from '../src/assets/fff.jpg'
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About.jsx";
import SpecialOffer from "./Components/SpecialOffer.jsx";
import Cart from "./Components/Cart.jsx";
import Blog from "./Components/Blog.jsx"; 
import Section from "./Components/Section.jsx";
import Footer from "./Components/Footer.jsx";


// Features images
import deliveryImage from "../src/assets/matcha.jpg";
import Products from "./Components/Products.jsx";
import PaymentPage from "./Components/PaymentPage.jsx";
// import supportImage from "../src/assets/suppo.jpg";

const App = () => {
  const features = [
    {
      image: deliveryImage, 
      title: 'Premium and Rare',
      description: 'Focus on offering high-quality,',
      dis:"rare, and hard-to-find teas."
    },
    {
      image: fun, 
      title: 'Functional and Wellness',
      description: 'Teas designed for specific ',
      dis:"health benefits."
    },
    {
      image: org, 
      title: 'Organic Teas',
      description: 'Teas made from organically grown,',
      dis:"ethically sourced ingredients."
    },
    {
      image: uni, 
      title: ' Unique Flavor Blends',
      description: 'Creative and innovative tea',
      dis:"blends with unique flavors."
    }
  ];

  return (
    <ShoppingCartProvider> 
      <Router>
        <Navbar />
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home features={features} />} />
          {/*About Page */}
          <Route path="/about" element={<About />} />
          {/* Product Details Route */}
          <Route path="/product" element={<Products/>}/>
          <Route path="/product/:id" element={<ProductDetails />} />
          {/* Special Offer Route */}
          <Route path="/special-offer" element={<SpecialOffer />} />
          {/* Cart Route */}
          <Route path="/cart" element={<Cart />} />
          {/* Blog Route */}
          <Route path="/blog" element={<Blog />} />
          {/* Section */}
          <Route path="/section" element={<Section />} />
          {/* Footer */}
          <Route path="/footer" element={<Footer />} />
          <Route path="/paymentpage" element={<PaymentPage/>}/>
          
        </Routes>
      </Router>
    </ShoppingCartProvider>
  );
};

export default App;