import { SIGN_UP } from '../actions/actionTypes';

const initialState = {
  title: 'SIGN UP',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SIGN_UP: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}
