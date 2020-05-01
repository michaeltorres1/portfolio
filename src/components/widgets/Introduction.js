import React from 'react';
import ResumeButton from './ResumeButton';
import Skills from './Skills';

const Introduction = ({ isDarkMode }) => {
  return (
    <div className='d-flex flex-column'>
      <div className='d-flex flex-row intro-card'>
        <div className='w-75 ml-4 bg-dark card-widget intro-para rounded mr-4 mb-5 text-light'>
          <h2>Hi, My Name Is Michael Torres and I am a Software Engineer!</h2>
          <p className='font-weight-lighter'>
            A highly motivated and innovative recent graduate with a BS in
            Computer Science and a Bootcamp graduate from App Academy.
            Demonstrated knowledge in C++, Ruby, Ruby on Rails, JavaScript,
            React / Redux, Express, PostgreSQL, MongoDB. Areas of interest
            include software applications and web development. Actively looking
            for opportunities where I can contribute and utilize my skills to
            further professional development. I always had a passion for coming
            up with creative solutions for solving problems. This passion has
            driven me to seek a career in computer science.{' '}
          </p>
        </div>
        <img
          src='https://media-exp1.licdn.com/dms/image/C4E03AQF7BVuFjyhnFg/profile-displayphoto-shrink_200_200/0?e=1593648000&v=beta&t=g1ByR5fbVvt9zV_RKZ9BQ5cyZwn0x6_pXEmWAIyy3ac'
          alt='me'
          className='mepic rounded mb-5'
        />
      </div>
      <div className='d-flex flex-row justify-content-between resume-and-skills mt-5 ml-4 mr-4'>
        <ResumeButton />
        <Skills />
      </div>
    </div>
  );
};

export default Introduction;
