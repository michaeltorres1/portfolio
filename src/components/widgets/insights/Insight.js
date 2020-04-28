import React from 'react';
import Timeline from '../Timeline';
import Education from '../Education';
import Projects from '../Projects';
import JavaScript from '../JavaScript';
import Python from '../Python';
import Ruby from '../Ruby';
import Java from '../Java';

const Insight = ({
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
  let myInsight;

  if (isTimeline) {
    myInsight = <Timeline isDarkMode={isDarkMode} />;
  } else if (isEducation) {
    myInsight = <Education isDarkMode={isDarkMode} />;
  } else if (isProjects) {
    myInsight = (
      <Projects
        dispatch={dispatch}
        isDarkMode={isDarkMode}
        isHtoShow={isHtoShow}
        isKeyboardFruitNinja={isKeyboardFruitNinja}
        isWirr={isWirr}
      />
    );
  } else if (isJavaScript) {
    myInsight = <JavaScript isDarkMode={isDarkMode} />;
  } else if (isPython) {
    myInsight = <Python isDarkMode={isDarkMode} />;
  } else if (isRuby) {
    myInsight = <Ruby isDarkMode={isDarkMode} />;
  } else if (isJava) {
    myInsight = <Java isDarkMode={isDarkMode} />;
  }

  return <div className='mt-3'>{myInsight}</div>;
};

export default Insight;
