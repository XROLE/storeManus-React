import {
  ADD_PRODUCT_IN_PROGRESS,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
} from '../actions/actionTypes';

const initialState = {
  message: '',
  pending: false,
  error: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT_IN_PROGRESS: {
      return {
        ...state,
        error: null,
        pending: true,
      };
    }
    case ADD_PRODUCT_SUCCESS: {
      return {
        ...state,
        pending: false,
        success: action.payload.success,
        message: action.payload.message,
      };
    }
    case ADD_PRODUCT_ERROR: {
      return {
        ...state,
        error: action.error,
        pending: false,
        success: action.success,
      };
    }
    default:
      return state;
  }
}
