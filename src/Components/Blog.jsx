import React from "react";
import "./Blog.css";

const blogPosts = [
  {
    id: 1,
    image: "https://i.pinimg.com/736x/c3/2b/c5/c32bc5d60ff45f9ddeda08e2d3eb4d3f.jpg", // Replace with actual image URLs
    title: "The Health Perks Of Drinking Different Types Of Tea",
    date: "March 17, 2025",
    description: "Tea is a universal favourite and there are no questions about that. With numerous health benefits, different types of tea have been enjoyed by people across the globe. The best...",
  },
  {
    id: 2,
    image: "https://i.pinimg.com/736x/4c/32/7e/4c327e777c3bca3c33f7aec71d8dee90.jpg",
    title: "Festive Chai Delights: The Perfect Tea & Snacks...",
    date: "March 10, 2025",
    description: "Holi, popularly known as the festival of colors, is widely celebrated by Indians across the planet. Besides being the festival of colored powder (gulal) and water, it is also a...",
  },
  {
    id: 3,
    image: "https://i.pinimg.com/736x/3f/77/d6/3f77d650fa9a17362424f7998f2ffd35.jpg",
    title: "Perfect Guide To Choosing The Best Tea Brands In India",
    date: "February 21, 2025",
    description: "Imagine a world without chai. Heartbreaking, right? For us, chai isn't only a drink; it's our soul, a daily routine, a warm hug in a cup. Chai plays an important...",
  },
  {
    id: 4,
    image: "https://i.pinimg.com/736x/9b/cb/20/9bcb2034766b302166eae604a94da673.jpg",
    title: "Caffeine Showdown: Tea vs. Coffee – Which Is Better for You?",
    date: "May 20, 2025",
    description: "Imagine a world without chai. Heartbreaking, right? For us, chai isn't only a drink; it's our soul, a daily routine, a warm hug in a cup. Chai plays an important...",
  },
  {
    id: 5,
    image: "https://i.pinimg.com/736x/09/4d/f4/094df4c82b417eb9e49581ea49986d01.jpg",
    title: "The Art of Tea Pairing: What to Eat with Your Favorite Brews",
    date: "April 22, 2025",
    description: "Imagine a world without chai. Heartbreaking, right? For us, chai isn't only a drink; it's our soul, a daily routine, a warm hug in a cup. Chai plays an important...",
  },
  {
    id: 6,
    image: "https://i.pinimg.com/736x/1a/43/ef/1a43efe67c566fa69df35ab5b8d4480a.jpg",
    title: "From Leaf to Cup: The Fascinating Journey of Tea Production",
    date: "June 22, 2025",
    description: "Imagine a world without chai. Heartbreaking, right? For us, chai isn't only a drink; it's our soul, a daily routine, a warm hug in a cup. Chai plays an important...",
  },
  {
    id: 7,
    image: "https://i.pinimg.com/736x/d4/a4/f9/d4a4f98b504d61e05946ab53f144effe.jpg",
    title: "Tea Rituals to Start Your Day with Calm and Focus",
    date: "January 14, 2025",
    description: "Imagine a world without chai. Heartbreaking, right? For us, chai isn't only a drink; it's our soul, a daily routine, a warm hug in a cup. Chai plays an important...",
  },
  {
    id: 8,
    image: "https://i.pinimg.com/736x/d2/67/17/d26717992ba78dc1a633aca1c0321667.jpg",
    title: "Must-Try Tea Blends for Every Season",
    date: "December 27, 2025",
    description: "Imagine a world without chai. Heartbreaking, right? For us, chai isn't only a drink; it's our soul, a daily routine, a warm hug in a cup. Chai plays an important...",
  },
];

const Blog = () => {
  return (
    <div className="blog-section">
      <h2 className="section-title">OUR BLOGS</h2>
      <p className="section-description">
      At Tea Powder, we share everything about tea powder — from its health benefits to creative recipes. 
      Learn brewing tips, pairing ideas, and unique ways to enjoy tea. 
      Whether you're a tea enthusiast or a curious beginner, there's something for you.
       Discover the best tea powders for health and how to make the perfect cup.
       Join us and explore the world of tea powder!
      </p>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <img src={post.image} alt={post.title} className="blog-image" />
            <h3 className="blog-title">{post.title}</h3>
            <p className="blog-date">{post.date}</p>
            <p className="blog-description">{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
