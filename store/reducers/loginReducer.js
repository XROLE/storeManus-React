import {
  LOGIN,
  LOGIN_PENDING,
  LOGIN_ERROR,
} from '../actions/actionTypes';

const initialState = {
  token: '',
  user: '',
  pending: false,
  error: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_ERROR: {
      return {
        ...state,
        error: action.error,
        pending: false,
      };
    }
    case LOGIN: {
      return {
        ...state,
        token: action.payload.Token,
        user: action.payload.User,
        pending: false,
      };
    }
    case LOGIN_PENDING: {
      return {
        ...state,
        error: null,
        pending: true,
      };
    }
    default:
      return state;
  }
}
