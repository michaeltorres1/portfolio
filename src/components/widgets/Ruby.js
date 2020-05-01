import React from 'react';

const Ruby = ({ isDarkMode }) => {
  return (
    <div
      className={`text-center mt-5 mr-5 ml-5 ${
        isDarkMode ? 'text-light' : 'text-dark'
      }`}
    >
      I first encountered this language when studying to get into App Academy.
      It is great, fun and easy to use. A lot like python but with more ways of
      writing things. I like Ruby a lot. I built a Full Stack web application,
      HTO-SHOW using Ruby on Rails, React, and PostgreSQL.
    </div>
  );
};

export default Ruby;
