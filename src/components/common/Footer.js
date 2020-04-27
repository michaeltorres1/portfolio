import React from 'react';

const Footer = ({ isDarkMode }) => {
  return (
    <nav
      id='nav'
      className={`navbar flex-column justify-content-center ${
        isDarkMode ? 'bg-dark' : 'bg-light'
      }`}
    >
      <div
        id='navTitle'
        className={`font-weight-lighter ${
          isDarkMode ? 'text-light' : 'text-dark'
        }`}
      >
        MICHAEL TORRES
      </div>
      <div className={`search mt-3 ${isDarkMode ? 'text-light' : 'text-dark'}`}>
        <i className='fab fa-github mr-5 nav-link'></i>
        <i className='fab fa-angellist mr-5 nav-link'></i>
        <i className='fab fa-linkedin-in nav-link'></i>
      </div>
    </nav>
  );
};

export default Footer;
