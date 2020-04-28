import React, { Fragment } from 'react';
import Pdf from './michael-torres-resume.pdf';

const ResumeButton = () => {
  return (
    <Fragment>
      <button
        type='button'
        className='see-resume-btn btn bg-dark text-light card-widget w-100'
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
            <div class='modal-footer d-flex justify-content-between'>
              <a
                href={Pdf}
                className='d-load-resume bg-dark text-light card-widget'
                download
              >
                Download resume
              </a>
              <a
                href={Pdf}
                className='view-resume bg-dark text-light card-widget'
              >
                View resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ResumeButton;
