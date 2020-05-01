import React, { Fragment } from 'react';

const Skills = () => {
  return (
    <Fragment>
      <button
        id='skillsButton'
        type='button'
        className='see-resume-btn btn bg-dark text-light card-widget'
        data-toggle='modal'
        data-target='#skillsModal'
      >
        See Skills
      </button>

      <div
        className='modal fade'
        id='skillsModal'
        tabindex='-1'
        role='dialog'
        aria-labelledby='skillsCenterTitle'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-centered' role='document'>
          <div className='modal-content bg-dark'>
            <div className='modal-header'>
              <h3 className='text-light'>My skills</h3>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true' className='text-light'>
                  &times;
                </span>
              </button>
            </div>
            <div className='modal-body'>
              <div className='d-flex flex-row justify-content-around text-light font-weight-bold'>
                <div className='d-flex flex-column'>
                  <div>JavaScript</div>
                  <div>Java</div>
                  <div>React</div>
                  <div>Flask</div>
                  <div>PostgreSQL</div>
                </div>
                <div className='d-flex flex-column'>
                  <div>Python</div>
                  <div>Ruby</div>
                  <div>Redux</div>
                  <div>SQLAlchemy</div>
                  <div>MongoDB</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Skills;
