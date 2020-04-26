import React from 'react';
import CardOne from './CardOne';
import CardTwo from './CardTwo';
import CardThree from './CardThree';

const Cards = () => {
  return (
    <div className='d-flex row justify-content-between ml-3 mr-3 mt-3 mobile-view'>
      <CardOne />
      <CardTwo />
      <CardThree />
    </div>
  );
};

export default Cards;
