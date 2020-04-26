import React, { Fragment } from 'react';
import Navbar from './components/common/Navbar';
import Menu from './components/widgets/Menu';

const App = () => (
  <Fragment>
    <hr className='w-100 bg-primary mt-0 mb-0' />
    <Navbar />
    <div className='d-flex'>
      <Menu />
    </div>
  </Fragment>
);

export default App;
