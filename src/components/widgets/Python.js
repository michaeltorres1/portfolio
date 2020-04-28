import React from 'react';

const Python = ({ isDarkMode }) => {
  return (
    <div className={isDarkMode ? 'text-light' : 'text-dark'}>
      this will be python
    </div>
  );
};

export default Python;
