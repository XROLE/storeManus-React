import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import addAttendantReducer from './addAttendantReducer';
import updateProfileReducer from './updateProfileReducer';
import addProductReducer from './addProductReducer';


export default combineReducers({
  login: loginReducer,
  registerAttendant: addAttendantReducer,
  profile: updateProfileReducer,
  addProduct: addProductReducer,
});
