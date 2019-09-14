import axios from 'axios';
import { REGISTER_USER } from './types';

export const RegisterUser = ({
  fname,
  lname,
  location,
  age
}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ fname, lname, location, age });
  try {
    const res = await axios.post('/user/signup', body, config);
    console.log(res);
    dispatch({
      type: REGISTER_USER,
      payload: res.data
    });
  } catch (error) {
    console.log(error.message);
  }
};
