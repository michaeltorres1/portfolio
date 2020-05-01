import React from 'react';

const CardOne = ({ isDarkMode }) => {
  return (
    <div
      className={`card-widget d-flex flex-column ${
        isDarkMode ? 'card-widget-dark' : 'card-widget-light'
      }`}
    >
      <div
        className={`font-weight-bold text-center ${
          isDarkMode ? 'text-light' : 'text-dark'
        }`}
      >
        My Journey
      </div>
      <hr />
      <div>
        <p
          className={`text-center ${
            isDarkMode
              ? 'text-light font-weight-lighter'
              : 'text-dark font-weight-light'
          }`}
        >
          I first got in software engineering in Stony Brook university. I was
          previously on a pre-med track and quickly realized that I loved
          programming more. Programming to me felt like more exciting and was
          more challenging. I went on to continue my studies in Western
          Connecticut State University where I received my Bachelors degree in
          Computer Science. After I wanted to make sure that I can have also the
          practical skills needed to hit the ground running so I joined App
          Academy and furthered my growth in knowledge in new technologies. I
          know build apps almost everyday and and do problems on leetcode and
          other platforms to keep my skills sharp!
        </p>
      </div>
    </div>
  );
};

export default CardOne;
