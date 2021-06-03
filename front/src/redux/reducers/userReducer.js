import { ADD_USER, GET_USER, USER_BUY, USER_REMOVE } from "../types/userTypes";

const userReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_USER:
      return action.payload;

    case GET_USER:
      return action.payload;

    case USER_BUY:
      return action.payload;

    case USER_REMOVE:
      return {
        ...state,
        stuff: state.stuff.filter((id) => id !== action.payload),
      };

    default:
      return state;
  }
};
export default userReducer;
