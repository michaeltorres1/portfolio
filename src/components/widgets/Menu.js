import React from 'react';

const Menu = ({ isDarkMode, dispatch }) => {
  const timelineOn = (e) => {
    e.preventDefault(e);
    dispatch({ type: 'VIEW_TIMELINE', payload: true });
  };

  const educationOn = (e) => {
    e.preventDefault(e);
    dispatch({ type: 'VIEW_EDUCATION', payload: true });
  };

  const projectsOn = (e) => {
    e.preventDefault(e);
    dispatch({ type: 'VIEW_PROJECTS', payload: true });
  };

  const javascriptOn = (e) => {
    e.preventDefault(e);
    dispatch({ type: 'VIEW_JAVASCRIPT', payload: true });
  };

  const pythonOn = (e) => {
    e.preventDefault(e);
    dispatch({ type: 'VIEW_PYTHON', payload: true });
  };

  const rubyOn = (e) => {
    e.preventDefault(e);
    dispatch({ type: 'VIEW_RUBY', payload: true });
  };

  const javaOn = (e) => {
    e.preventDefault(e);
    dispatch({ type: 'VIEW_JAVA', payload: true });
  };

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
          className={`fas fa-code-branch fa-2x ${
            isDarkMode ? 'text-light' : 'text-dark'
          }`}
        ></i>
        <div
          className={`font-weight-light ml-3 my-menu-link ${
            isDarkMode ? 'text-light' : 'text-dark'
          }`}
          onClick={(e) => timelineOn(e)}
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
          onClick={(e) => educationOn(e)}
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
          onClick={(e) => projectsOn(e)}
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
          onClick={(e) => javascriptOn(e)}
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
          onClick={(e) => pythonOn(e)}
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
          onClick={(e) => rubyOn(e)}
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
          onClick={(e) => javaOn(e)}
        >
          Java
        </div>
      </div>
    </div>
  );
};

export default Menu;
