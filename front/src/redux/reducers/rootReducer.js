import { combineReducers } from "redux";
import userReducer from "./userReducer";
import stuffReducer from "./stuffReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  user: userReducer,
  stuffArray: stuffReducer,
  theme: themeReducer
});

export default rootReducer;
