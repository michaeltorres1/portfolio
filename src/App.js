import React, { Fragment } from 'react';
import Navbar from './components/common/Navbar';
import Menu from './components/widgets/Menu';
import MainWidget from './components/widgets/Main';
import Cards from './components/widgets/cards/Cards';
import Footer from './components/common/Footer';

const App = () => (
  <Fragment>
    <hr className='w-100 bg-primary mt-0 mb-0' />
    <Navbar />
    <div className='d-flex ml-3 mt-3'>
      <Menu />
      <MainWidget />
    </div>
    <Cards />
    <hr className='w-100 bg-primary mt-4 mb-0' />
    <Footer />
  </Fragment>
);

export default App;
