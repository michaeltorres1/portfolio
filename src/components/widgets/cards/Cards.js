import React from 'react';
import CardOne from './CardOne';
import CardTwo from './CardTwo';
import CardThree from './CardThree';

const Cards = ({ isDarkMode }) => {
  return (
    <div className='d-flex row justify-content-between ml-3 mr-3 mt-3 mobile-view'>
      <CardOne isDarkMode={isDarkMode} />
      <CardTwo isDarkMode={isDarkMode} />
      <CardThree isDarkMode={isDarkMode} />
    </div>
  );
};

export default Cards;
