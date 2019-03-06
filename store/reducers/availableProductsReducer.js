import {
  AVAILABLE_PRODUCT_IN_PROGRESS,
  AVAILABLE_PRODUCT_ERROR,
  AVAILABLE_PRODUCT_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  message: '',
  pending: false,
  error: '',
  availableProducts: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AVAILABLE_PRODUCT_IN_PROGRESS: {
      return {
        ...state,
        error: null,
        pending: true,
      };
    }
    case AVAILABLE_PRODUCT_SUCCESS: {
      return {
        ...state,
        pending: false,
        availableProducts: action.payload.availableProducts,
      };
    }
    case AVAILABLE_PRODUCT_ERROR: {
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
