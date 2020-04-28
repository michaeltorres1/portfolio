import React from 'react';

const Projects = ({
  dispatch,
  isDarkMode,
  isHtoShow,
  isKeyboardFruitNinja,
  isWirr,
}) => {
  let myFrame;

  if (isKeyboardFruitNinja) {
    myFrame = (
      <iframe
        src='https://michaeltorres1.github.io/keyboard-fruit-ninja/dist/landing.html'
        frameborder='0'
        className='embed-page'
        title='3'
      />
    );
  } else if (isWirr) {
    myFrame = (
      <iframe
        src='http://www.wikipediarr.com/'
        frameborder='0'
        className='embed-page'
        title='2'
      />
    );
  } else if (isHtoShow) {
    myFrame = 'oops this one is private!!!';
  }

  const showHtoShow = (e) => {
    e.preventDefault(e);
    dispatch({ type: 'VIEW_HTOSHOW', payload: true });
  };

  const showKeyboardFruitNinja = (e) => {
    e.preventDefault(e);
    dispatch({ type: 'VIEW_KEYBOARD_FRUIT_NINJA', payload: true });
  };

  const showWirr = (e) => {
    e.preventDefault(e);
    dispatch({ type: 'VIEW_WIRR', payload: true });
  };

  return (
    <div
      className={`d-flex flex-column ml-1 ${
        isDarkMode ? 'text-light' : 'text-dark'
      }`}
    >
      <div className='d-flex flex-row justify-content-between mb-2'>
        <div className='d-flex w-25'>
          <img
            src='https://i.ibb.co/6HGL8zb/Screen-Shot-2020-04-26-at-3-57-00-PM.png'
            alt='keyboardfruitninja'
            className='project-img'
            onClick={(e) => showKeyboardFruitNinja(e)}
          />
        </div>
        <div className='d-flex w-25'>
          <img
            src='https://i.ibb.co/syrgmcY/Screen-Shot-2020-04-26-at-4-00-45-PM.png'
            alt='wirr'
            className='project-img'
            onClick={(e) => showWirr(e)}
          />
        </div>
        <div className='d-flex w-25'>
          <img
            src='https://i.ibb.co/GkS89Lt/Screen-Shot-2020-04-26-at-3-54-20-PM.png'
            alt='htoshow'
            className='project-img'
            onClick={(e) => showHtoShow(e)}
          />
        </div>
      </div>
      <div className=''>{myFrame}</div>
    </div>
  );
};

export default Projects;
