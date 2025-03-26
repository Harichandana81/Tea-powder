import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {  AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

import img1 from '../assets/back11.jpg';
import img2 from '../assets/back7.jpg';
import img3 from '../assets/back10.jpg';

const WayanadSlider = () => {
  const images = [img1, img2 , img3];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [previousImageIndex, setPreviousImageIndex] = useState(null);

  useEffect(() => {
    if (previousImageIndex !== null) {
      const timer = setTimeout(() => {
        setPreviousImageIndex(null);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [previousImageIndex]);

  const changeImage = (index) => {
    setPreviousImageIndex(currentImageIndex);
    setCurrentImageIndex(index);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => changeImage(next),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerMode: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      }
    ]
  };

  const CustomArrow = ({ direction, onClick }) => (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="rounded-circle border-0 d-flex align-items-center justify-content-center shadow-lg"
      onClick={onClick}
      style={{
        position: "relative",
        zIndex: 5,
        width: "50px",
        height: "50px",
        backgroundColor: "#1EB980",
        cursor: "pointer"
      }}
      aria-label={direction === "next" ? "Next slide" : "Previous slide"}
    >
      <span className="text-white fs-4">{direction === "next" ? "→" : "←"}</span>
    </motion.button>
  );

  const titles = ["TRUE TASTE", "DIFFERENT TYPES OF TEA", " THE UNIQUE TEA"];
  const descriptions = [
    "Experience the delicate beauty of butterflies in their natural habitat, showcasing nature's incredible diversity.",
    "Immerse yourself in the vibrant colors and patterns of flowers that attract these fascinating pollinators.",
    "Discover the perfect harmony between insects and plants in this magical ecosystem."
  ];

  const transitions = [
    "slideFromRight",
    "zoomFade", 
    "rotateZoom"
  ];

  const currentTransition = transitions[currentImageIndex % transitions.length];

  return (
    <div className="position-relative overflow-hidden" style={{ height: "90vh", width: "100%" }}>
      {/* Dynamic Background with Cool Transitions */}
      <div className="background-container position-absolute w-100 h-100">
        {/* Current Image with Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            className="position-absolute w-100 h-100"
            initial={getInitialAnimation(currentTransition)}
            animate={getAnimateAnimation(currentTransition)}
            exit={getExitAnimation(currentTransition)}
            transition={{ duration: 1.2 }}
            style={{
              backgroundImage: `url(${images[currentImageIndex]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: 1
            }}
          />
        </AnimatePresence>

        {/* Previous Image (for smoother transitions) */}
        {previousImageIndex !== null && (
          <div
            className="position-absolute w-100 h-100"
            style={{
              backgroundImage: `url(${images[previousImageIndex]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: 0
            }}
          />
        )}
      </div>

      {/* Overlay with animated gradient */}
      <div 
        className="position-absolute w-100 h-100"
        style={{
          // background: "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)",
          // animation: "gradientShift 8s ease infinite alternate",
          zIndex: 2
        }}
      />

      {/* Animated content container */}
      <div className="container position-relative h-100 d-flex z-3">
        <div className="row w-100 align-items-center">
          <div className="col-lg-7 col-md-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-white"
              >
                {/* Animated text elements */}
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <h2 className="display-4 fw-light text-success mb-0">EXPLORE</h2>
                  <h1 className="display-1 fw-bold text-success mb-2">{titles[currentImageIndex]}</h1>
                </motion.div>

                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="mb-4 lead text-white"
                >
                  {descriptions[currentImageIndex]}
                </motion.p>

                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="d-flex gap-3 mb-5"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000" }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-outline-light text-black px-4 py-2 rounded-pill"
                  >
                    Explore More
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn text-white px-4 py-2 rounded-pill"
                    style={{ backgroundColor: "#1EB980" }}
                  >
                    Subscribe
                  </motion.button>
                </motion.div>

                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  className="d-flex gap-3"
                >
                  <CustomArrow
                    direction="prev"
                    onClick={() => document.querySelector(".slick-prev").click()}
                  />
                  <CustomArrow
                    direction="next"
                    onClick={() => document.querySelector(".slick-next").click()}
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Animated slider thumbnails */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="position-absolute"
        style={{
          bottom: "10%",
          right: "5%",
          width: "40%",
          zIndex: 3
        }}
      >
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="p-2">
              <motion.div
                whileHover={{ scale: 1.05, y: -10, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
                className={`rounded ${currentImageIndex === index ? 'border border-4 ' : ''}`}
                style={{
                  backgroundImage: `url(${img})`,
                  height: "150px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "10px",
                  width: "100%",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
                onClick={() => changeImage(index)}
              />
            </div>
          ))}
        </Slider>
      </motion.div>

      {/* Animated particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width:` ${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 5}s`
            }
          }
          />
        ))}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        .background-container {
          overflow: hidden;
        }
        
        @keyframes gradientShift {
          0% { background: linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%); }
          50% { background: linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(30,185,128,0.3) 100%); }
          100% { background: linear-gradient(135deg, rgba(30,185,128,0.2) 0%, rgba(0,0,0,0.6) 100%); }
        }
        
        .particles {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }
        
        .particle {
          position: absolute;
          background-color: rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          animation: float linear infinite;
          opacity: 0;
        }
        
        @keyframes float {
          0% { transform: translate(0, 0); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.4; }
          100% { transform: translate(${Math.random() > 0.5 ? '' : '-'}${Math.random() * 100 + 50}px, ${Math.random() > 0.5 ? '' : '-'}${Math.random() * 100 + 50}px); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

// Helper functions for different transition animations
function getInitialAnimation(type) {
  switch(type) {
    case "slideFromRight":
      return { x: "100%", opacity: 0 };
    case "zoomFade":
      return { scale: 1.5, opacity: 0 };
    case "rotateZoom":
      return { rotate: 8, scale: 1.2, opacity: 0 };
    default:
      return { opacity: 0 };
  }
}

function getAnimateAnimation(type) {
  switch(type) {
    case "slideFromRight":
      return { x: 0, opacity: 1 };
    case "zoomFade":
      return { scale: 1, opacity: 1 };
    case "rotateZoom":
      return { rotate: 0, scale: 1, opacity: 1 };
    default:
      return { opacity: 1 };
  }
}

function getExitAnimation(type) {
  switch(type) {
    case "slideFromRight":
      return { x: "-100%", opacity: 0 };
    case "zoomFade":
      return { scale: 0.8, opacity: 0 };
    case "rotateZoom":
      return { rotate: -8, scale: 0.8, opacity: 0 };
    default:
      return { opacity: 0 };
  }
}

export default WayanadSlider;