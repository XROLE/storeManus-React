import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import addAttendantReducer from './addAttendantReducer';
import updateProfileReducer from './updateProfileReducer';


export default combineReducers({
  login: loginReducer,
  registerAttendant: addAttendantReducer,
  profile: updateProfileReducer,
});
