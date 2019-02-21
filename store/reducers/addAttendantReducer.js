import {
  ADDING_ATTENDANT,
  ADDED_ATTENDANT,
  ADD_ATTENDANT_ERROR,
} from '../actions/actionTypes';

const initialState = {
  message: '',
  pending: false,
  error: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_ATTENDANT_ERROR: {
      return {
        ...state,
        error: action.error,
        pending: false,
      };
    }
    case ADDED_ATTENDANT: {
      return {
        ...state,
        message: action.payload.message,
        pending: false,
      };
    }
    case ADDING_ATTENDANT: {
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
