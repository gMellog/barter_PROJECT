import { combineReducers } from "redux";
import stuffReducer from "./stuffReducer";
import userReducer from "./userReducer";
import dealsReducer from './dealsReducer';

const rootReducer = combineReducers({
  stuffArray: stuffReducer,
  user: userReducer,
  deals: dealsReducer
});

export default rootReducer;
