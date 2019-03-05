import axios from 'axios';
import {
  LOGIN_SUCCESS,
  LOGIN_PENDING,
  LOGIN_ERROR,
  ADDING_ATTENDANT,
  ADDED_ATTENDANT,
  ADD_ATTENDANT_ERROR,
} from '../actions/actionTypes';

const aMail = 'xrolediamond@gmail.com';
const baseUrl = 'https://storemanus.herokuapp.com/api/v1';
const adminUrl = `${baseUrl}/admin/auth/signin`;
const attendantsUrl = `${baseUrl}/attendants/auth/signin`;

const headers = {
  headers: {
    Accept: 'application/json, text/plain, */*',
    'x-access-token': `Bearer ${localStorage.getItem('storeManus_token')}`,
    'Content-type': 'application/json',
  },
};

const initialState = {
  token: '',
  user: '',
  pending: false,
  error: '',
};


export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_ERROR: {
      return {
        ...state,
        error: action.error,
        pending: false,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        token: action.payload.Token,
        user: action.payload.User,
        pending: false,
      };
    }
    case LOGIN_PENDING: {
      return {
        ...state,
        error: null,
        pending: true,
      };
    }
    default:
      return state;
  }
}


export function loginInProgress() {
  return { type: LOGIN_PENDING };
}

export function addingAttendantInProgress() {
  return { type: ADDING_ATTENDANT };
}

export function loginUser(loginDetails) {
  let url;

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
        dispatch({ type: LOGIN_SUCCESS, payload: { Token, User } });
      }).catch((err) => {
        const error = err.response.data.Message;
        dispatch({ type: LOGIN_ERROR, error });
      });
  };
}

export function addAttendant(attendantDetails) {
  const url = `${baseUrl}/attendants/auth/register`;

  return (dispatch) => {
    dispatch(addingAttendantInProgress());
    axios
      .post(url, attendantDetails, headers)
      .then((res) => {
        const message = `Proceed to update your account password = ${res.data.password}`;
        dispatch({ type: ADDED_ATTENDANT, payload: { message } });
        alert(message);
      }).catch((err) => {
        const error = err.response.data.Message;
        console.log(err);
        dispatch({ type: ADD_ATTENDANT_ERROR, error });
      });
  };
}
