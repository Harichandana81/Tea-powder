import React from "react";
import WayanadSlider from "./WayanadSlider";
import Features from "./Features";
import About from "./About";
import Products from "./Products";
import SpecialOffer from "./SpecialOffer";
import Blog from "./Blog";
import Section from "./Section";
import Footer from "./Footer";


const Home = ({ features }) => {
  return (
    <>
      <WayanadSlider />
      <br />
      <br />
      <h1 className='head'>Latest</h1>
      <div className="features-container">
        {features.map((feature, index) => (
          <Features key={index}  image={feature.image} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
    </div><br/>
      <br />
      <br />
      <About />
      <Products />
      <SpecialOffer/><br />
      <br />
      <Blog />
      <Section />
      <Footer />
    

    </>
  );
};

export default Home;