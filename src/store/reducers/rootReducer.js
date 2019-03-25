import { combineReducers } from "redux";
import loginReducer from './loginReducer';
import usersReducer from "./usersReducers";

const rootReducer = combineReducers({
  login: loginReducer,
  users: usersReducer
});

export default rootReducer;
