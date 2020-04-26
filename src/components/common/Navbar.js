import React from 'react';

const Navbar = () => {
  return (
    <nav id='nav' className='navbar bg-dark'>
      <div className='font-weight-light text-light'>DASHBOARD</div>
      <div className='search text-light'>
        <i className='fas fa-search mr-5'></i>
        <i className='far fa-bell mr-5'></i>
        <i className='far fa-address-card'></i>
      </div>
    </nav>
  );
};

export default Navbar;
