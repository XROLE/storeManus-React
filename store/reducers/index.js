import { combineReducers } from 'redux';
import signUpReducer from './signUpReducer';
import loginReducer from './loginReducer';
import addAttendantReducer from './addAttendantReducer';


export default combineReducers({
  signUp: signUpReducer,
  login: loginReducer,
  registerAttendant: addAttendantReducer,
});
