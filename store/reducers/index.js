import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import addAttendantReducer from './addAttendantReducer';
import updateProfileReducer from './updateProfileReducer';
import addProductReducer from './addProductReducer';
import getProduct from './getProducts';

export default combineReducers({
  login: loginReducer,
  registerAttendant: addAttendantReducer,
  profile: updateProfileReducer,
  addProduct: addProductReducer,
  getProduct,
});
