import {
  ATTENDANT_IN_PROGRESS,
  ATTENDANT_SUCCESS,
  ATTENDANT_ERROR,
} from '../actions/actionTypes';

const initialState = {
  message: '',
  pending: false,
  error: '',
  attendants: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ATTENDANT_IN_PROGRESS: {
      return {
        ...state,
        error: null,
        pending: true,
      };
    }
    case ATTENDANT_SUCCESS: {
      return {
        ...state,
        pending: false,
        attendants: action.payload.attendants,
      };
    }
    case ATTENDANT_ERROR: {
      return {
        ...state,
        error: action.error,
        pending: false,
      };
    }
    default:
      return state;
  }
}
