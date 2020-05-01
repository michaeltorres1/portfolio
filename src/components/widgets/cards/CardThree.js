import React from 'react';

const CardThree = ({ isDarkMode }) => {
  return (
    <div
      className={`card-widget d-flex flex-column ${
        isDarkMode ? 'card-widget-dark' : 'card-widget-light'
      }`}
    >
      <div
        className={`font-weight-bold text-center ${
          isDarkMode ? 'text-light' : 'text-dark'
        }`}
      >
        What I'm looking for...
      </div>
      <hr />
      <div>
        <p
          className={`text-center ${
            isDarkMode
              ? 'text-light font-weight-lighter'
              : 'text-dark font-weight-light'
          }`}
        >
          <div className='d-flex flex-column'>
            <div className='mb-2'>
              A place with good snacks and sofas...just kidding! I am looking
              for a place I can grow as a software engineer. Everytime I figure
              out how to do something new I always think about how I can make it
              better
            </div>
            <div>
              I want to work with a team. I want to grow my skills learning from
              professional engineers by collaborating with them, and reading
              their code and learning new techniques.
            </div>
            <div></div>
          </div>
        </p>
      </div>
    </div>
  );
};

export default CardThree;
