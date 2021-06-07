import { GET_USER, LOGOUT_USER } from "../types/userTypes";

const stuffReducer = (state = [], action) => {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    case LOGOUT_USER:
      return null;
    default:
      return state;
  }
};
export default stuffReducer;
