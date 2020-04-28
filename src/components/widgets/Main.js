import React from 'react';
import Insight from './insights/Insight';

const Main = ({
  dispatch,
  isDarkMode,
  isTimeline,
  isEducation,
  isProjects,
  isJavaScript,
  isPython,
  isRuby,
  isJava,
  isHtoShow,
  isKeyboardFruitNinja,
  isWirr,
}) => {
  return (
    <div
      id='mainWidget'
      className={`d-flex flex-column ${
        isDarkMode ? 'main-widget-dark' : 'main-widget-light'
      }`}
    >
      <div
        className={`font-weight-light ml-3 ${
          isDarkMode ? 'text-light' : 'text-dark'
        }`}
      ></div>
      <Insight
        dispatch={dispatch}
        isDarkMode={isDarkMode}
        isTimeline={isTimeline}
        isEducation={isEducation}
        isProjects={isProjects}
        isJavaScript={isJavaScript}
        isPython={isPython}
        isRuby={isRuby}
        isJava={isJava}
        isHtoShow={isHtoShow}
        isKeyboardFruitNinja={isKeyboardFruitNinja}
        isWirr={isWirr}
      />
    </div>
  );
};

export default Main;
