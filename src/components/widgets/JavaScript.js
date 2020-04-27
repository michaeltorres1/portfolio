import React from 'react';

const JavaScript = ({ isDarkMode }) => {
  return (
    <div className={isDarkMode ? 'text-light' : 'text-dark'}>
      this will be javascript
    </div>
  );
};

export default JavaScript;
