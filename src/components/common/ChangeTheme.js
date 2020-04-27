import React from 'react';
import { fadeInDownBig } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
  fadeInDownBig: {
    animation: 'x 3s',
    animationName: Radium.keyframes(fadeInDownBig, 'fadeInDownBig'),
  },
};

const ChangeTheme = ({ isDarkMode, dispatch }) => {
  return (
    <StyleRoot>
      <div id='toggleLight' className='test' style={styles.fadeInDownBig}>
        <i
          className={`fas fa-adjust fa-2x p-2 pr-4 ${
            isDarkMode ? 'text-light' : 'text-dark'
          }`}
          onClick={() => {
            isDarkMode
              ? dispatch({ type: 'TURN_ON_LIGHTS', payload: false })
              : dispatch({ type: 'TURN_OFF_LIGHTS', payload: true });
          }}
        ></i>
      </div>
    </StyleRoot>
  );
};

export default ChangeTheme;
