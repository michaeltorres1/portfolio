import React from 'react';
import Insight from './insights/Insight';

const Main = () => {
  return (
    <div id='mainWidget' className='d-flex flex-column text-light'>
      <div className='font-weight-light text-light mt-3 ml-3'>INSIGHTS</div>
      <Insight />
    </div>
  );
};

export default Main;
