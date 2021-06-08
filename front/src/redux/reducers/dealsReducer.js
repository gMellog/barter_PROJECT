import { SET_DEALS, SET_DEAL} from "../types/dealsTypes";

const dealsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_DEALS:
      return action.payload;
    case SET_DEAL:
        return state.map(deal => {
            if(deal.id === action.payload.id)
            {
                return action.payload;
            }
            return deal;
        })

    default:
      return state;
  }
};
export default dealsReducer;
