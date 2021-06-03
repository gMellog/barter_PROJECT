import { GET_STUFF, SEARCH_STUFF } from "../types/stuffTypes";

const stuffReducer = (state = [], action) => {
  switch (action.type) {
    case GET_STUFF:
      return action.payload;

    case SEARCH_STUFF:
      return action.payload;

    default:
      return state;
  }
};
export default stuffReducer;
