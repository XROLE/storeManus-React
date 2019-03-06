import axios from 'axios';
import {
  UPDATE_IN_PROGRESS,
  UPDATE_SUCCESS,
  UPDATE_ERROR,
  ADD_PRODUCT_IN_PROGRESS,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
} from './actionTypes';

const baseUrl = 'https://storemanus.herokuapp.com/api/v1';
const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjksImZpcnN0bmFtZSI6ImdnIiwibGFzdG5hbWUiOiJhIiwiZW1haWwiOiJnZ0BhLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJE93VE1xRTNJUUMxZGRIWlRreUwvSS5vNjEucWZ0bE9BcFY0WEJWUmNNWUtWNWJOWjVtLzFhIiwicGhvbmVubyI6IjExMTExMTExMTExIiwiZ2VuZGVyIjoidXBkYXRlIiwicHJvZmlsZXBpY3MiOiIuLi9pbWcvYXZhdGFyLmpwZyIsImlhdCI6MTU1MTc5NjEyOH0.9ABAKYB1L8ltE6fa5CsLTnYTtvzTWiUY-2NjniNuv6o';

const git = {
  headers: {
    Accept: 'application/json, text/plain, */*',
    'x-access-token': token,
    'Content-type': 'application/json',
  },
};

export const profileUpdateInProgress = () => ({ type: UPDATE_IN_PROGRESS });
export const addProductInProgress = () => ({ type: ADD_PRODUCT_IN_PROGRESS });

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
      console.log(' This is success message', message);

      dispatch({ type: ADD_PRODUCT_SUCCESS, payload: { message, success } });
    }).catch((err) => {
      const error = err.response.data.Message;
      const success = err.response.data.Success;

      console.log('========> error', err);
      dispatch({ type: ADD_PRODUCT_ERROR, error, success });
    });
};
