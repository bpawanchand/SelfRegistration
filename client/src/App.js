import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppNavbar from '../src/components/layout/Navbar';
<<<<<<< HEAD
import Home from '../src/components/Home';
=======
import RegisterForm from '../src/components/register';
>>>>>>> 18a1dd180d654d6f7ac024733651476339a48ddd
import 'bootstrap/dist/css/bootstrap.min.css';

//  redux
import { Provider } from 'react-redux';
import store from './store';


const App = () => {
  return (
<<<<<<< HEAD
    <div className='container-fluid'>
      <AppNavbar />
      <Home />
    </div>
=======
    <Provider store={store}>
      <Router>
        <Fragment>
          <AppNavbar />
          <section className="container">
            <RegisterForm />
          </section>
        </Fragment>
      </Router>
    </Provider>
>>>>>>> 18a1dd180d654d6f7ac024733651476339a48ddd
  );
};

export default App;
