import React from 'react';

const Menu = () => {
  return (
    <div id='menuWidget' className='flex flex-column bg-primary-light mr-3 p-2'>
      <div className='menu-header'>
        <div className='font-weight-bold text-light d-flex justify-content-center'>
          MT
        </div>
        <div className='font-weight-light text-light ml-3 my-menu-link'>
          MICHAEL TORRES
        </div>
      </div>
      <hr className='bg-dark' />
      <div className='mb-4 menu-link nav-link'>
        <i class='fas fa-code-branch text-light fa-2x'></i>
        <div className='font-weight-light text-light ml-3 my-menu-link'>
          Timeline
        </div>
      </div>
      <div className='mb-4 menu-link nav-link'>
        <i className='fas fa-graduation-cap text-light fa-2x'></i>
        <div className='font-weight-light text-light ml-3 my-menu-link'>
          Education
        </div>
      </div>
      <div className='mb-4 menu-link nav-link'>
        <i className='fas fa-book-open text-light fa-2x'></i>
        <div className='font-weight-light text-light ml-3 my-menu-link'>
          Projects
        </div>
      </div>
      <div className='mb-4 menu-link nav-link'>
        <i className='fab fa-js-square text-light fa-2x'></i>
        <div className='font-weight-light text-light ml-3 my-menu-link'>
          JavaScript
        </div>
      </div>
      <div className='mb-4 menu-link nav-link'>
        <i className='fab fa-python text-light fa-2x'></i>
        <div className='font-weight-light text-light ml-3 my-menu-link'>
          Python 3
        </div>
      </div>
      <div className='mb-4 menu-link nav-link'>
        <i className='far fa-gem text-light fa-2x'></i>
        <div className='font-weight-light text-light ml-3 my-menu-link'>
          Ruby
        </div>
      </div>
      <div className='mb-4 menu-link nav-link'>
        <i className='fab fa-java text-light fa-2x'></i>
        <div className='font-weight-light text-light ml-3 my-menu-link'>
          Java
        </div>
      </div>
    </div>
  );
};

export default Menu;
