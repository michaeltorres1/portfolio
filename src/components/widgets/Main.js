import React from 'react';
import Insight from './insights/Insight';

const Main = ({
  isDarkMode,
  isTimeline,
  isEducation,
  isProjects,
  isJavaScript,
  isPython,
  isRuby,
  isJava,
}) => {
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
        TIMELINE
      </div>
      <Insight
        isDarkMode={isDarkMode}
        isTimeline={isTimeline}
        isEducation={isEducation}
        isProjects={isProjects}
        isJavaScript={isJavaScript}
        isPython={isPython}
        isRuby={isRuby}
        isJava={isJava}
      />
    </div>
  );
};

export default Main;
