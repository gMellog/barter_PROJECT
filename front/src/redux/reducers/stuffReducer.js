import {
  GET_STUFF,
  ADD_STUFF,
  DEL_STUFF,
  EDIT_STUFF,
} from "../types/stuffTypes";

const stuffReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_STUFF:
      return [...state, action.payload];

    case DEL_STUFF:
      return action.payload;

    case EDIT_STUFF:
      return state;

    case GET_STUFF:
      return action.payload;

    default:
      return state;
  }
};
export default stuffReducer;
