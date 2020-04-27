import React from 'react';

const Education = ({ isDarkMode }) => {
  return (
    <div className='d-flex flex-column'>
      <div className='d-flex justify-content-center'>
        <img
          src='https://www.stonybrook.edu/far-beyond/img/branding/logo/sbu/primary/300/stony-brook-university-logo-horizontal-300.png'
          alt='stonybrooklogo'
          className='education-img mb-2'
        />
      </div>
      <div
        className={`d-flex text-center mb-5 ${
          isDarkMode ? 'text-light' : 'text-dark'
        }`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, vel
        atque fugit ratione aliquam earum dolores, eveniet voluptatem doloribus
        illum quis praesentium fugiat mollitia voluptatibus dolorem perferendis
        enim doloremque quibusdam similique dolor eligendi pariatur illo rerum!
        Hic voluptates sapiente, facilis illum animi, porro rem provident
        possimus eveniet velit quas vel.
      </div>
      <div className='d-flex justify-content-center'>
        <img
          src='https://www.wcsu.edu/wp-content/themes/westconn/images/shield-logo.png'
          alt='wcsulogo'
          className='education-img mb-2'
        />
      </div>
      <div
        className={`d-flex text-center mb-5 ${
          isDarkMode ? 'text-light' : 'text-dark'
        }`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quasi
        ducimus similique blanditiis quis aliquid quod nam exercitationem
        tempora sequi temporibus autem consectetur, eos rem facere voluptas cum
        magnam unde. Sit deleniti dolorum doloribus, laboriosam delectus illum
        ea suscipit quaerat consectetur modi eos iste explicabo repellendus
        dolor id, minima quibusdam!
      </div>
      <div className='d-flex justify-content-center'>
        <img
          src='https://i.ibb.co/87KhtbH/Screen-Shot-2020-04-27-at-7-30-32-PM.png'
          alt='appacademylogo'
          className='education-img mb-2'
        />
      </div>
      <div
        className={`d-flex text-center mb-5 ${
          isDarkMode ? 'text-light' : 'text-dark'
        }`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
        aperiam molestiae? Aliquid, excepturi! Vero natus perferendis doloremque
        odio aut repellendus sed, repellat magni molestias ut, repudiandae illo!
        Et natus adipisci nemo similique veniam facere nostrum nisi deserunt
        molestiae, nihil neque cum nulla dolorem omnis. Ea corrupti possimus
        recusandae veritatis quis!
      </div>
    </div>
  );
};

export default Education;
