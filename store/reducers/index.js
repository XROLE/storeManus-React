import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import addAttendantReducer from './addAttendantReducer';
import updateProfileReducer from './updateProfileReducer';
import addProductReducer from './addProductReducer';
import getProduct from './getProducts';
import avaibleProducts from './availableProductsReducer';
import finishedProducts from './finisheProductReducer';
import getAttendants from './getAttendants';
import updatedProduct from './updateProductReducer';
import sales from './createSalesReducer';

export default combineReducers({
  login: loginReducer,
  registerAttendant: addAttendantReducer,
  profile: updateProfileReducer,
  addProduct: addProductReducer,
  getProduct,
  avaibleProducts,
  finishedProducts,
  getAttendants,
  updatedProduct,
  sales,
});
