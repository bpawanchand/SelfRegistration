import React from 'react';
import AppNavbar from '../src/components/layout/Navbar';
import Home from '../src/components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className='container-fluid'>
      <AppNavbar />
      <Home />
    </div>
  );
};

export default App;
