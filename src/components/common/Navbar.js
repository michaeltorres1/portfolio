import React from 'react';

const Navbar = () => {
  return (
    <nav id='nav' className='navbar bg-dark'>
      <div id='navTitle' className='font-weight-lighter text-light'>
        DASHBOARD
      </div>
      <div className='search text-light'>
        <i className='fas fa-search mr-5 nav-link'></i>
        <i class='fab fa-github mr-5 nav-link'></i>
        <i class='fab fa-angellist mr-5 nav-link'></i>
        <i class='fab fa-linkedin-in nav-link'></i>
      </div>
    </nav>
  );
};

export default Navbar;
