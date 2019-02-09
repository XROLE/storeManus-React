import { SIGN_IN } from '../actions/types';

const initialState = {
  title: 'SIGN IN',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SIGN_IN: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}
