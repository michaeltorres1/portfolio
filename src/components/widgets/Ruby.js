import React from 'react';

const Ruby = ({ isDarkMode }) => {
  return (
    <div className={isDarkMode ? 'text-light' : 'text-dark'}>
      this will be ruby
    </div>
  );
};

export default Ruby;
