import React from 'react';

const Projects = ({ isDarkMode }) => {
  return (
    <div className={isDarkMode ? 'text-light' : 'text-dark'}>
      this will be projects
    </div>
  );
};

export default Projects;
