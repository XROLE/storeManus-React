import {

  CREATE_SALES_IN_PROGRESS,
  CREATE_SALES_SUCCESS,
  CREATE_SALES_ERROR,
} from '../actions/actionTypes';

const initialState = {
  pending: false,
  error: '',
  success: false,
  message: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_SALES_IN_PROGRESS: {
      return {
        ...state,
        pending: true,
      };
    }
    case CREATE_SALES_SUCCESS: {
      return {
        ...state,
        pending: false,
        success: true,
        sales: action.payload.sale,
      };
    }
    case CREATE_SALES_ERROR: {
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
