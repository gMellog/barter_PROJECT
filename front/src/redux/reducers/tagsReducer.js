import { SET_TAGS } from "../types/tagsTypes";

const tagsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_TAGS:
      return action.payload;
    default:
      return state;
  }
};
export default tagsReducer;
