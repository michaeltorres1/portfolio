import React from 'react';
import Timeline from '../Timeline';

const Insight = ({ isDarkMode }) => {
  return (
    <div className='mt-3 ml-3'>
      <Timeline isDarkMode={isDarkMode} />
    </div>
  );
};

export default Insight;
