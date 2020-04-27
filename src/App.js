import React, { Fragment, useReducer } from 'react';
import ChangeTheme from './components/common/ChangeTheme';
import Navbar from './components/common/Navbar';
import Menu from './components/widgets/Menu';
import MainWidget from './components/widgets/Main';
import Cards from './components/widgets/cards/Cards';
import Footer from './components/common/Footer';

const initialState = {
  isDarkMode: true,
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
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isDarkMode } = state;

  return (
    <div className={isDarkMode ? 'bg-dark-light' : 'bg-light'}>
      <ChangeTheme isDarkMode={isDarkMode} dispatch={dispatch} />
      <hr className='w-100 bg-primary mt-0 mb-0' />
      <Navbar isDarkMode={isDarkMode} />
      <div className='d-flex ml-3 mt-3 mobile-view'>
        <Menu isDarkMode={isDarkMode} />
        <MainWidget isDarkMode={isDarkMode} />
      </div>
      <Cards isDarkMode={isDarkMode} />
      <hr className='w-100 bg-primary mt-4 mb-0' />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;
