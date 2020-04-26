import React from 'react';
import Username from './Username';
import Commits from './Commits';
import Respositories from './Respositories';
import Stars from './Stars';

const Insight = () => {
  return (
    <div className='mt-3 ml-3'>
      <Username />
      <Commits />
      <Respositories />
      <Stars />
    </div>
  );
};

export default Insight;
