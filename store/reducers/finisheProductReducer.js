import {
  FINISHED_PRODUCT_IN_PROGRESS,
  FINISHED_PRODUCT_SUCCESS,
  FINISHED_PRODUCT_ERROR,
} from '../actions/actionTypes';

const initialState = {
  message: '',
  pending: false,
  error: '',
  finishedProducts: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FINISHED_PRODUCT_IN_PROGRESS: {
      return {
        ...state,
        error: null,
        pending: true,
      };
    }
    case FINISHED_PRODUCT_SUCCESS: {
      return {
        ...state,
        pending: false,
        finishedProducts: action.payload.finishedProducts,
      };
    }
    case FINISHED_PRODUCT_ERROR: {
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
