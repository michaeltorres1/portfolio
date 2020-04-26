import React, { Fragment } from 'react';
import Navbar from './components/common/Navbar';
import Menu from './components/widgets/Menu';
import MainWidget from './components/widgets/Main';

const App = () => (
  <Fragment>
    <hr className='w-100 bg-primary mt-0 mb-0' />
    <Navbar />
    <div className='d-flex ml-3 mt-3'>
      <Menu />
      <MainWidget />
    </div>
  </Fragment>
);

export default App;
