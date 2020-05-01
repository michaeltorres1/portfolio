import React from 'react';

const Python = ({ isDarkMode }) => {
  return (
    <div
      className={`text-center mt-5 mr-5 ml-5 ${
        isDarkMode ? 'text-light' : 'text-dark'
      }`}
    >
      My first encounter with Python was in Stony Brook University. It was
      exciting to start using if statements and while loops and for loops. I
      didn't know about classes and separate functions during this time. But
      just doing simple stuff at the time was really cool, and my passion for
      programming grew! I then went ahead years later to learn and build a Full
      Stack application using Python React, Flask, SQLAlchemy, and Postgres in
      just two days.
    </div>
  );
};

export default Python;
