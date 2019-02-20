import axios from 'axios';
import {
  LOGIN,
  LOGIN_PENDING,
  LOGIN_ERROR,
} from './actionTypes';

let url;
const adminUrl = 'https://storemanus.herokuapp.com/api/v1/admin/auth/signin';
const attendantsUrl = 'https://storemanus.herokuapp.com/api/v1/attendants/auth/signin';


const aMail = 'xrolediamond@gmail.com';
const headers = {
  headers: {
    Accept: 'application/json, text/plain, multipart/form-data, */*',
    'Content-type': 'application/json',
  },
};
export function loginInProgress() {
  return { type: LOGIN_PENDING };
}

export function loginUser(loginDetails) {
  return (dispatch) => {
    const { email } = loginDetails;
    if (email === aMail) {
      url = adminUrl;
    } else {
      url = attendantsUrl;
    }
    dispatch(loginInProgress());
    axios
      .post(url, loginDetails, headers)
      .then((res) => {
        const { Token, User } = res.data;
        localStorage.setItem('accessToken', Token);
        dispatch({ type: LOGIN, payload: { Token, User } });
      }).catch((err) => {
        const error = err.response.data.Message;
        dispatch({ type: LOGIN_ERROR, error });
      });
  };
}
