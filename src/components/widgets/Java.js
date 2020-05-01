import React from 'react';

const Java = ({ isDarkMode }) => {
  return (
    <div
      className={`text-center mt-5 mr-5 ml-5 ${
        isDarkMode ? 'text-light' : 'text-dark'
      }`}
    >
      Learning Java was super fun and confusing at first. This is when I first
      saw classes - I mean everything in Java is a class so it's kind of hard
      not to encounter this is you're learning Java. Java was super cool and I
      yet still hadn't encountered creating separate functions to call in other
      ones. When I learned Java for the first time is when I began to encounter
      these new things. After Java I went to study C++ for 4 years which was
      more of a challenge but great.
    </div>
  );
};

export default Java;
