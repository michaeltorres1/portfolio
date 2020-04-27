import React from 'react';

const Menu = ({ isDarkMode }) => {
  return (
    <div
      id='menuWidget'
      className={`flex flex-column mr-3 p-2 ${
        isDarkMode ? 'menu-widget-dark' : 'menu-widget-light'
      }`}
    >
      <div className='menu-header'>
        <div
          className={`font-weight-bold d-flex justify-content-center ${
            isDarkMode ? 'text-light' : 'text-dark'
          }`}
        >
          MT
        </div>
        <div
          className={`font-weight-light ml-3 my-menu-link ${
            isDarkMode ? 'text-light' : 'text-dark'
          } `}
        >
          MICHAEL TORRES
        </div>
      </div>
      <hr className='bg-dark' />
      <div className='mb-4 menu-link nav-link'>
        <i
          class={`fas fa-code-branch fa-2x ${
            isDarkMode ? 'text-light' : 'text-dark'
          }`}
        ></i>
        <div
          className={`font-weight-light ml-3 my-menu-link ${
            isDarkMode ? 'text-light' : 'text-dark'
          }`}
        >
          Timeline
        </div>
      </div>
      <div className='mb-4 menu-link nav-link'>
        <i
          className={`fas fa-graduation-cap fa-2x ${
            isDarkMode ? 'text-light' : 'text-dark'
          }`}
        ></i>
        <div
          className={`font-weight-light ml-3 my-menu-link ${
            isDarkMode ? 'text-light' : 'text-dark'
          } `}
        >
          Education
        </div>
      </div>
      <div className='mb-4 menu-link nav-link'>
        <i
          className={`fas fa-book-open fa-2x ${
            isDarkMode ? 'text-light' : 'text-dark'
          }`}
        ></i>
        <div
          className={`font-weight-light ml-3 my-menu-link ${
            isDarkMode ? 'text-light' : 'text-dark'
          } `}
        >
          Projects
        </div>
      </div>
      <div className='mb-4 menu-link nav-link'>
        <i
          className={`fab fa-js-square fa-2x ${
            isDarkMode ? 'text-light' : 'text-dark'
          }`}
        ></i>
        <div
          className={`font-weight-light ml-3 my-menu-link ${
            isDarkMode ? 'text-light' : 'text-dark'
          } `}
        >
          JavaScript
        </div>
      </div>
      <div className='mb-4 menu-link nav-link'>
        <i
          className={`fab fa-python fa-2x ${
            isDarkMode ? 'text-light' : 'text-dark'
          }`}
        ></i>
        <div
          className={`font-weight-light ml-3 my-menu-link ${
            isDarkMode ? 'text-light' : 'text-dark'
          } `}
        >
          Python 3
        </div>
      </div>
      <div className='mb-4 menu-link nav-link'>
        <i
          className={`far fa-gem fa-2x ${
            isDarkMode ? 'text-light' : 'text-dark'
          }`}
        ></i>
        <div
          className={`font-weight-light ml-3 my-menu-link ${
            isDarkMode ? 'text-light' : 'text-dark'
          } `}
        >
          Ruby
        </div>
      </div>
      <div className='mb-4 menu-link nav-link'>
        <i
          className={`fab fa-java fa-2x ${
            isDarkMode ? 'text-light' : 'text-dark'
          }`}
        ></i>
        <div
          className={`font-weight-light ml-3 my-menu-link ${
            isDarkMode ? 'text-light' : 'text-dark'
          } `}
        >
          Java
        </div>
      </div>
    </div>
  );
};

export default Menu;
