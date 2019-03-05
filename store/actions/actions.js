import axios from 'axios';
import {
  UPDATE_IN_PROGRESS,
  UPDATE_SUCCESS,
  UPDATE_ERROR,
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
