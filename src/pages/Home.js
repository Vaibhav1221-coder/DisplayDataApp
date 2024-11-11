// src/pages/Home.js
import React from 'react';
import '../styles/Home.css'; // Importing CSS

function Home() {
  return (
    <div className="home-container">
      <div className="content">
        <h1 className="main-title">Welcome to Our Blog</h1>
        <p className="intro-text">
          Explore insightful posts, connect with a community, and stay updated.
        </p>
        <div className="cta-container">
          <a href="/login" className="cta-button">Login</a>
          <a href="/signup" className="cta-button">Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
