import { LOGOUT_USER, SET_USER,DELETE_AVATAR_USER} from "../types/userTypes";

const stuffReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    case LOGOUT_USER:
      return null;
    case DELETE_AVATAR_USER:
        return  action.payload;
    default:
      return state;
  }
};
export default stuffReducer;
