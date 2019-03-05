import {
  UPDATE_IN_PROGRESS,
  UPDATE_ERROR,
  UPDATE_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  pending: false,
  error: '',
  success: false,
  message: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_IN_PROGRESS: {
      return {
        ...state,
        pending: true,
      };
    }
    case UPDATE_SUCCESS: {
      return {
        ...state,
        pending: false,
        success: action.payload.success,
        message: action.payload.message,
      };
    }
    case UPDATE_ERROR: {
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    }
    default:
      return state;
  }
}
