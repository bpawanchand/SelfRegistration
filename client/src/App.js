import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppNavbar from '../src/components/layout/Navbar';
import RegisterForm from '../src/components/register';
import { RegisterUser } from '../src/actions/RegisterUser';
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
          <section className='container'>
            <RegisterForm component={RegisterUser} />
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
