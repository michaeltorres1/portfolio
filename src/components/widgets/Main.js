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
  let header;

  if (isTimeline) {
    header = 'TIMELINE';
  } else if (isEducation) {
    header = 'EDUCATION';
  } else if (isProjects) {
    header = 'PROJECTS';
  } else if (isJavaScript) {
    header = 'JAVASCRIPT';
  } else if (isPython) {
    header = 'PYTHON';
  } else if (isRuby) {
    header = 'RUBY';
  } else if (isJava) {
    header = 'JAVA';
  }

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
        {header}
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
