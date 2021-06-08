import { GET_PROCUCTS } from "../types/productsType";

const stuffReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PROCUCTS:
      return action.payload;
    default:
      return state;
  }
};
export default stuffReducer;
