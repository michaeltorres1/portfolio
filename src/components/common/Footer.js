import React from 'react';

const Footer = () => {
  return (
    <nav id='nav' className='navbar flex-column justify-content-center bg-dark'>
      <div id='navTitle' className='font-weight-lighter text-light'>
        MICHAEL TORRES
      </div>
      <div className='search text-light mt-3'>
        <i className='fab fa-github mr-5 nav-link'></i>
        <i className='fab fa-angellist mr-5 nav-link'></i>
        <i className='fab fa-linkedin-in nav-link'></i>
      </div>
    </nav>
  );
};

export default Footer;
