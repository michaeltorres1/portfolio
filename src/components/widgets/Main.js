import React from 'react';
import Insight from './insights/Insight';

const Main = ({ isDarkMode }) => {
  return (
    <div
      id='mainWidget'
      className={`d-flex flex-column ${
        isDarkMode ? 'main-widget-dark' : 'main-widget-light'
      }`}
    >
      <div
        className={`font-weight-light mt-3 ml-3 ${
          isDarkMode ? 'text-light' : 'text-dark'
        }`}
      >
        INSIGHTS
      </div>
      <Insight isDarkMode={isDarkMode} />
    </div>
  );
};

export default Main;
