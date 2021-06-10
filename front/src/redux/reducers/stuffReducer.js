import { GET_STUFF, SEARCH_STUFF, SORT_BY_NAME } from "../types/stuffTypes";

const stuffReducer = (state = [], action) => {
  switch (action.type) {
    case GET_STUFF:
      return action.payload;

    case SEARCH_STUFF:
      return action.payload;

    case SORT_BY_NAME:
      return [
        ...state.sort(function (a, b) {
          var nameA = a.name.toUpperCase(); // ignore upper and lowercase
          var nameB = b.name.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        }),
      ];

    default:
      return state;
  }
};
export default stuffReducer;
