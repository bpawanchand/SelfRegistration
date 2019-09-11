import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppNavbar from '../src/components/layout/Navbar';
import RegisterForm from '../src/components/register';
import 'bootstrap/dist/css/bootstrap.min.css';

//  redux
import { Provider } from 'react-redux';
import store from './store';


const App = () => {
  return (
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
  );
};

export default App;
