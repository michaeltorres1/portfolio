import React from 'react';

const CardTwo = ({ isDarkMode }) => {
  return (
    <div
      className={`card-widget d-flex flex-column mr-1 ml-1 ${
        isDarkMode ? 'card-widget-dark' : 'card-widget-light'
      }`}
    >
      <div
        className={`font-weight-bold text-center ${
          isDarkMode ? 'text-light' : 'text-dark'
        }`}
      >
        My Achievements
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
          <ul>
            <li>
              Came out as top student in all physics courses thought during the
              same semester!
            </li>
            <li>
              Built LearnSQL - an application aimed to solve a problem to help
              students learn and communicated better with their professors.
              Based on an open source project called ClassDB.
            </li>
            <li>
              Accepted in App Academy - a Full Stack Web Development program
              with less than 3% acceptance rate
            </li>
            <li>
              Built 3 new apps within a month time - (I can do this quicker
              now).
            </li>
            <li>
              Learned a whole new tech stack and built a Full Stack application
              all in 2 days.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default CardTwo;
