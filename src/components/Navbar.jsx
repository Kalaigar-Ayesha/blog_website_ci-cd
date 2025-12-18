import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const Navbar = ({ onNavigate, currentPage }) => {
  const generateStars = () => {
    const starsContainer = document.querySelector('.stars');
    if (!starsContainer) return;
    
    starsContainer.innerHTML = '';
    const starCount = 50;

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.animationDelay = Math.random() * 3 + 's';
      star.style.animationDuration = (Math.random() * 2 + 2) + 's';
      starsContainer.appendChild(star);
    }
  };

  useEffect(() => {
    generateStars();
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand" onClick={() => onNavigate('home')}>
          <span className="logo-text">DevOps Blog</span>
        </Link>
        <ul className="navbar-menu">
          <li>
            <Link 
              to="/" 
              className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
              onClick={() => onNavigate('home')}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/articles" 
              className={`nav-link ${currentPage === 'articles' ? 'active' : ''}`}
              onClick={() => onNavigate('articles')}
            >
              Articles
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
              onClick={() => onNavigate('about')}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
              onClick={() => onNavigate('contact')}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="stars"></div>
    </nav>
  );
};

export default Navbar;
