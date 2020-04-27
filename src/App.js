import React, { useReducer } from 'react';
import ChangeTheme from './components/common/ChangeTheme';
import Navbar from './components/common/Navbar';
import Menu from './components/widgets/Menu';
import MainWidget from './components/widgets/Main';
import Cards from './components/widgets/cards/Cards';
import Footer from './components/common/Footer';

const initialState = {
  isDarkMode: true,
  isTimeline: false,
  isEducation: false,
  isProjects: false,
  isJavaScript: false,
  isPython: false,
  isRuby: false,
  isJava: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'TURN_OFF_LIGHTS':
      return {
        ...state,
        isDarkMode: action.payload,
      };
    case 'TURN_ON_LIGHTS':
      return {
        ...state,
        isDarkMode: action.payload,
      };
    case 'VIEW_TIMELINE':
      return {
        ...state,
        isEducation: false,
        isProjects: false,
        isJavaScript: false,
        isPython: false,
        isRuby: false,
        isJava: false,
        isTimeline: action.payload,
      };
    case 'VIEW_EDUCATION':
      return {
        ...state,
        isTimeline: false,
        isProjects: false,
        isJavaScript: false,
        isPython: false,
        isRuby: false,
        isJava: false,
        isEducation: action.payload,
      };
    case 'VIEW_PROJECTS':
      return {
        ...state,
        isTimeline: false,
        isEducation: false,
        isJavaScript: false,
        isPython: false,
        isRuby: false,
        isJava: false,
        isProjects: action.payload,
      };
    case 'VIEW_JAVASCRIPT':
      return {
        ...state,
        isTimeline: false,
        isEducation: false,
        isProjects: false,
        isPython: false,
        isRuby: false,
        isJava: false,
        isJavaScript: action.payload,
      };
    case 'VIEW_PYTHON':
      return {
        ...state,
        isTimeline: false,
        isEducation: false,
        isProjects: false,
        isJavaScript: false,
        isRuby: false,
        isJava: false,
        isPython: action.payload,
      };
    case 'VIEW_RUBY':
      return {
        ...state,
        isTimeline: false,
        isEducation: false,
        isProjects: false,
        isJavaScript: false,
        isPython: false,
        isJava: false,
        isRuby: action.payload,
      };
    case 'VIEW_JAVA':
      return {
        ...state,
        isTimeline: false,
        isEducation: false,
        isProjects: false,
        isJavaScript: false,
        isPython: false,
        isRuby: false,
        isJava: action.payload,
      };
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    isDarkMode,
    isTimeline,
    isEducation,
    isProjects,
    isJavaScript,
    isPython,
    isRuby,
    isJava,
  } = state;

  return (
    <div className={isDarkMode ? 'bg-dark-light' : 'bg-light'}>
      <ChangeTheme isDarkMode={isDarkMode} dispatch={dispatch} />
      <hr className='w-100 bg-primary mt-0 mb-0' />
      <Navbar isDarkMode={isDarkMode} />
      <div className='d-flex ml-3 mt-3 mobile-view'>
        <Menu isDarkMode={isDarkMode} dispatch={dispatch} />
        <MainWidget
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
      <Cards isDarkMode={isDarkMode} />
      <hr className='w-100 bg-primary mt-4 mb-0' />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;
