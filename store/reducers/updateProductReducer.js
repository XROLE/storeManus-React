import {
  UPDATE_PRODUCT_IN_PROGRESS,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_ERROR,
} from '../actions/actionTypes';

const initialState = {
  message: '',
  pending: false,
  error: '',
  updatedAvailableProduct: '',
  success: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_PRODUCT_IN_PROGRESS: {
      return {
        ...state,
        error: null,
        pending: true,
      };
    }
    case UPDATE_PRODUCT_SUCCESS: {
      return {
        ...state,
        pending: false,
        success: true,
        updatedAvailableProduct: action.payload.editedProduct,
      };
    }
    case UPDATE_PRODUCT_ERROR: {
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
