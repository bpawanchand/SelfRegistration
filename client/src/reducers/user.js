import { REGISTER_USER } from '../actions/types';

const initialState = {
  fname: '',
  lname: '',
  location: '',
  age: ''
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_USER:
      return [...state, payload];
    default:
      return state;
  }
}
