import { SET_DEALS, SET_DEAL, CHANGE_DEAL, ADD_DEAL} from "../types/dealsTypes";

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
      
    case CHANGE_DEAL:
        return state.map( deal => {
          if(action.payload.id === deal.id)
          {
              return action.payload;
          }

          return deal;
        })

    case ADD_DEAL: 
        return [...state, action.payload];

    default:
      return state;
  }
};
export default dealsReducer;
