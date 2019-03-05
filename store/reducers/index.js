import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import addAttendantReducer from './addAttendantReducer';


export default combineReducers({
  login: loginReducer,
  registerAttendant: addAttendantReducer,
});
