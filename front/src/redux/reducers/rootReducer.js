import { combineReducers } from "redux";
import stuffReducer from "./stuffReducer";

const rootReducer = combineReducers({
  stuffArray: stuffReducer,
});

export default rootReducer;
