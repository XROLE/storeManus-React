import axios from 'axios';
import {
  PROFILE_UPDATE_IN_PROGRESS,
  PROFILE_UPDATE_ERROR,
  PROFILE_UPDATE_IN_PROGRESS,
} from './actionTypes';

const baseUrl = 'https://storemanus.herokuapp.com/api/v1';

const headers = {
  headers: {
    Accept: 'application/json, text/plain, */*',
    'x-access-token': `Bearer ${localStorage.getItem('storeManus_token')}`,
    'Content-type': 'application/json',
  },
};

export const profileUpdateInProgress = () => {
  return { type: PROFILE_UPDATE_IN_PROGRESS };
}

export const isLargeFileSize = (file) => {
  if(file > 70000){
    return true;
}

export function updateProfile(profileDetails, id){
  const url = `${baseUrl}/api/v1/attendants/${id}`;

  return (dispatch) => {
    dispatch(profileUpdateInProgress());
    axios
      .post(url, profileDetails, headers)
      .then((res) => {
        const message = `Proceed to update your account password = ${res.data.password}`;
        dispatch({ type: ADDED_ATTENDANT, payload: { message } });
      }).catch((err) => {
        const error = err.response.data.Message;
        console.log(err);
        dispatch({ type: ADD_ATTENDANT_ERROR, error });
    })
  }
}
