import axios from 'axios';
import {
  UPDATE_IN_PROGRESS,
  UPDATE_SUCCESS,
  UPDATE_ERROR,
  ADD_PRODUCT_IN_PROGRESS,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  GET_PRODUCT_IN_PROGRESS,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
  AVAILABLE_PRODUCT_IN_PROGRESS,
  AVAILABLE_PRODUCT_SUCCESS,
  AVAILABLE_PRODUCT_ERROR,
  FINISHED_PRODUCT_IN_PROGRESS,
  FINISHED_PRODUCT_SUCCESS,
  FINISHED_PRODUCT_ERROR,
  ATTENDANT_IN_PROGRESS,
  ATTENDANT_SUCCESS,
  ATTENDANT_ERROR,
} from './actionTypes';

const baseUrl = 'https://storemanus.herokuapp.com/api/v1';
const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Inhyb2xlZGlhbW9uZEBnbWFpbC5jb20iLCJwYXNzd29yZCI6Inhyb2xldmFsc2lkbzI2MzQiLCJpYXQiOjE1NTE4ODI2MDAsImV4cCI6MTU1MTg4NjIwMH0.hSzMVYHAeogdqPBXnMaVzkBIfUPYMv5QbLVftEYNHXQ';

// const token = `Bearer ${localStorage.getItem('accessToken')}`;

const git = {
  headers: {
    Accept: 'application/json, text/plain, */*',
    'x-access-token': token,
    'Content-type': 'application/json',
  },
};

export const profileUpdateInProgress = () => ({ type: UPDATE_IN_PROGRESS });
export const addProductInProgress = () => ({ type: ADD_PRODUCT_IN_PROGRESS });
export const gettingProductInProgress = () => ({ type: GET_PRODUCT_IN_PROGRESS });
export const gettingAvailableProductInProgress = () => ({ type: AVAILABLE_PRODUCT_IN_PROGRESS });
export const gettingFinishedProductInProgress = () => ({ type: FINISHED_PRODUCT_IN_PROGRESS });
export const gettingAttendantInProgress = () => ({ type: ATTENDANT_IN_PROGRESS });

export function updateProfile(profileDetails, id) {
  const url = `${baseUrl}/attendants/${id}`;

  return (dispatch) => {
    dispatch(profileUpdateInProgress());
    axios
      .put(url, profileDetails, git)
      .then((res) => {
        const success = res.data.Success;
        const message = res.data.Message;
        dispatch({ type: UPDATE_SUCCESS, payload: { message, success } });
      }).catch((err) => {
        const error = err.response.data.Message;
        console.log('========> error', err);
        dispatch({ type: UPDATE_ERROR, error });
      });
  };
}

export const addProduct = product => (dispatch) => {
  const url = `${baseUrl}/products`;
  dispatch(addProductInProgress());
  axios
    .post(url, product, git)
    .then((res) => {
      const success = res.data.Success;
      const message = res.data.Message;

      dispatch({ type: ADD_PRODUCT_SUCCESS, payload: { message, success } });
    }).catch((err) => {
      const error = err.response.data.Message;
      const success = err.response.data.Success;

      console.log('========> error', err);
      dispatch({ type: ADD_PRODUCT_ERROR, error, success });
    });
};

export const getProducts = () => (dispatch) => {
  const url = `${baseUrl}/products`;

  dispatch(gettingProductInProgress());
  axios
    .get(url, git)
    .then((res) => {
      const products = res.data.Products;

      dispatch({ type: GET_PRODUCT_SUCCESS, payload: { products } });
    }).catch((err) => {
      const error = err.response.data.Message;

      console.log('========> error', error);
      dispatch({ type: GET_PRODUCT_ERROR, error });
    });
};

export const getAvailableProducts = () => (dispatch) => {
  const url = `${baseUrl}/products/available`;

  dispatch(gettingAvailableProductInProgress());
  axios
    .get(url, git)
    .then((res) => {
      const { availableProducts } = res.data;

      dispatch({ type: AVAILABLE_PRODUCT_SUCCESS, payload: { availableProducts } });
    }).catch((err) => {
      const error = err.response.data.Message;

      console.log('========> error', error);
      dispatch({ type: AVAILABLE_PRODUCT_ERROR, error });
    });
};

export const getFinishedProducts = () => (dispatch) => {
  const url = `${baseUrl}/products/finished`;

  dispatch(gettingFinishedProductInProgress());
  axios
    .get(url, git)
    .then((res) => {
      const { finishedProducts } = res.data;

      dispatch({ type: FINISHED_PRODUCT_SUCCESS, payload: { finishedProducts } });
    }).catch((err) => {
      const error = err.response.data.Message;

      console.log('========> error', error);
      dispatch({ type: FINISHED_PRODUCT_ERROR, error });
    });
};

export const getAttendants = () => (dispatch) => {
  const url = `${baseUrl}/attendants`;

  dispatch(gettingAttendantInProgress());
  axios
    .get(url, git)
    .then((res) => {
      const { attendants } = res.data;
      dispatch({ type: ATTENDANT_SUCCESS, payload: { attendants } });
    }).catch((err) => {
      const error = err.response.data.Message;

      console.log('========> error', error);
      dispatch({ type: ATTENDANT_ERROR, error });
    });
};
