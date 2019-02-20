import { combineReducers } from 'redux';
import signUpReducer from './signUpReducer';
import loginReducer from './loginReducer';


export default combineReducers({
  signUp: signUpReducer,
  login: loginReducer,
});
