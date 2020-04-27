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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed voluptas
          natus, consectetur optio numquam ab nisi consequatur, fugiat rem
          quibusdam impedit eos ad quo suscipit nihil? Dolorum, animi omnis
          perferendis porro saepe, id sit dolores aspernatur quae rem reiciendis
          voluptates eius quidem voluptatem non fugit! Eum tempora reprehenderit
          obcaecati? Totam?
        </p>
      </div>
    </div>
  );
};

export default CardTwo;
