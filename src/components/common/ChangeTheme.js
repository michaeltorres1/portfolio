import React from 'react';
import { fadeInDownBig } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
  fadeInDownBig: {
    animation: 'x 3s',
    animationName: Radium.keyframes(fadeInDownBig, 'fadeInDownBig'),
  },
};

const ChangeTheme = () => {
  return (
    <StyleRoot>
      <div id='toggleLight' className='test' style={styles.fadeInDownBig}>
        <i className='fas fa-adjust fa-2x text-warning p-2 pr-4'></i>
      </div>
    </StyleRoot>
  );
};

export default ChangeTheme;
