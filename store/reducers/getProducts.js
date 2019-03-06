import {
  GET_PRODUCT_IN_PROGRESS,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
} from '../actions/actionTypes';

const initialState = {
  message: '',
  pending: false,
  error: '',
  products: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT_IN_PROGRESS: {
      return {
        ...state,
        error: null,
        pending: true,
      };
    }
    case GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        pending: false,
        products: action.payload.products,
      };
    }
    case GET_PRODUCT_ERROR: {
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
