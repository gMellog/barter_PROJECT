import { combineReducers } from "redux";
import stuffReducer from "./stuffReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  stuffArray: stuffReducer,
  user: userReducer,
});

export default rootReducer;
