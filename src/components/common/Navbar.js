import React from 'react';

const Navbar = ({ isDarkMode }) => {
  return (
    <nav id='nav' className={`navbar ${isDarkMode ? 'bg-dark' : 'bg-light'}`}>
      <div
        id='navTitle'
        className={`font-weight-lighter ${
          isDarkMode ? 'text-light' : 'text-dark'
        }`}
      >
        MT
      </div>
      <div className='search text-light nav-search-links'>
        <i
          className={`fas fa-search mr-5 ${
            isDarkMode ? 'text-light' : 'text-dark'
          } nav-link`}
        ></i>
        <i
          className={`fab fa-github mr-5 ${
            isDarkMode ? 'text-light' : 'text-dark'
          } nav-link`}
        ></i>
        <i
          className={`fab fa-angellist mr-5 nav-link ${
            isDarkMode ? 'text-light' : 'text-dark'
          }`}
        ></i>
        <i
          className={`fab fa-linkedin-in nav-link ${
            isDarkMode ? 'text-light' : 'text-dark'
          }`}
        ></i>
      </div>
    </nav>
  );
};

export default Navbar;
