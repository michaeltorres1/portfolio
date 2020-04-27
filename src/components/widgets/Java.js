import React from 'react';

const Java = ({ isDarkMode }) => {
  return (
    <div className={isDarkMode ? 'text-light' : 'text-dark'}>
      this weill be java
    </div>
  );
};

export default Java;
