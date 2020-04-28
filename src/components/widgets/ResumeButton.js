import React, { Fragment } from 'react';
import Pdf from './michael-torres-resume.pdf';

const ResumeButton = () => {
  return (
    <Fragment>
      <button
        type='button'
        className='btn btn-primary'
        data-toggle='modal'
        data-target='#exampleModalCenter'
      >
        See resume
      </button>

      <div
        className='modal fade'
        id='exampleModalCenter'
        tabindex='-1'
        role='dialog'
        aria-labelledby='exampleModalCenterTitle'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-centered' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <div className='d-flex justify-content-center'>
                <embed src={Pdf} type='application/pdf' className='my-resume' />
              </div>
            </div>
            <div class='modal-footer'>
              <a href={Pdf} download>
                Download resume
              </a>
              <a href={Pdf}>View resume</a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ResumeButton;
