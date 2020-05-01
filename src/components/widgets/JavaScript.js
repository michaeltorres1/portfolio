import React from 'react';

const JavaScript = ({ isDarkMode }) => {
  return (
    <div
      className={`text-center mt-5 mr-5 ml-5 ${
        isDarkMode ? 'text-light' : 'text-dark'
      }`}
    >
      First time I learned JavaScript I learned it on my own to build a Full
      Stack Web Application, LearnSQL. I learned how to connect the client and
      server to communicate with each other and learned a lot of different
      technologies. I then went ahead to build more apps like HTO-SHOW, WIRR,
      and Keyboard Fruit Ninja. All using JavaScript, React, AngularJS,
      ExpressJS, NodeJS.
    </div>
  );
};

export default JavaScript;
