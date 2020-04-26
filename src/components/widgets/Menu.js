import React from 'react';

const Menu = () => {
  return (
    <div className='ml-4 mt-1 flex flex-column this-menu'>
      <div
        id='menuWidget'
        className='flex flex-column bg-primary-light mt-4 p-2'
      >
        <div className='menu-link'>
          <div className='font-weight-lighter text-light d-flex justify-content-center'>
            MT
          </div>
        </div>
        <hr className='bg-light' />
        <div className='mb-4 menu-link'>
          <i className='fas fa-graduation-cap text-light fa-2x'></i>
        </div>
        <div className='mb-4 menu-link'>
          <i className='fas fa-book-open text-light fa-2x'></i>
        </div>
        <div className='mb-4 menu-link'>
          <i className='fab fa-js-square text-light fa-2x'></i>
        </div>
        <div className='mb-4 menu-link'>
          <i class='fab fa-python text-light fa-2x'></i>
        </div>
        <div className='mb-4 menu-link'>
          <i class='far fa-gem text-light fa-2x'></i>
        </div>
        <div className='mb-4 menu-link'>
          <i class='fab fa-java text-light fa-2x'></i>
        </div>
      </div>
    </div>
  );
};

export default Menu;
