import React from 'react';

const Header = ({ title, subtitle, description }) => {
  return (
    <header>
      <div className="header-shine"></div>
      <div className="header-content">
        <h1>{title}</h1>
        <p className="tagline">{subtitle}</p>
        <p className="header-description">{description}</p>
      </div>
    </header>
  );
};

export default Header;
