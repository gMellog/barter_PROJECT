import { combineReducers } from "redux";
import stuffReducer from "./stuffReducer";
import userReducer from "./userReducer";
import dealsReducer from './dealsReducer';
import productsReducer from "./productsReducer"
import categoriesReducer from "./categoryReducer"
import tagsReducer from "./tagsReducer"

const rootReducer = combineReducers({
  stuffArray: stuffReducer,
  user: userReducer,
  deals: dealsReducer,
  products: productsReducer,
  categories: categoriesReducer,
  tags: tagsReducer,
});

export default rootReducer;
