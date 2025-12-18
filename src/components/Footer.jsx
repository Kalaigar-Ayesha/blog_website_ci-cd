import React from 'react';

const Footer = ({ onNavigate }) => {
  const handleLinkClick = (page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h4>About DevOps Blog</h4>
          <p>
            Your go-to resource for DevOps best practices, CI/CD strategies, and modern infrastructure management. 
            Learn from industry experts and stay updated with the latest trends.
          </p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a onClick={() => handleLinkClick('home')}>Home</a></li>
            <li><a onClick={() => handleLinkClick('articles')}>Articles</a></li>
            <li><a onClick={() => handleLinkClick('about')}>About Us</a></li>
            <li><a onClick={() => handleLinkClick('contact')}>Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Newsletter</h4>
          <p>Subscribe to get the latest DevOps insights directly in your inbox.</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#" className="social-link">GitHub</a>
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">Discord</a>
          </div>
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-bottom">
        <p>&copy; 2025 DevOps Blog. All rights reserved.</p>
        <div className="footer-links">
          <a onClick={() => handleLinkClick('home')}>Privacy Policy</a>
          <a onClick={() => handleLinkClick('home')}>Terms of Service</a>
          <a onClick={() => handleLinkClick('home')}>Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
