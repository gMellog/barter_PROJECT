import { authHeader } from "../../helpers/authHeader";
import { ADD_DEAL, CHANGE_DEAL, SET_DEAL,SET_DEALS } from "../types/dealsTypes";

export const setDeals = (deals) => {
    return {
      type: SET_DEALS,
      payload: deals,
    };
  };

export const setDeal = (deal) => {
    return {
        type: SET_DEAL,
        payload: deal
    }
}

export const changeDeal = (deal) => {
  return {
    type: CHANGE_DEAL,
    payload: deal
  }
}

export const addDeal = (deal) => {
  return {
    type: ADD_DEAL,
    payload: deal
  }
}

export const getUserDeals = () => async (dispatch) => {
    const res = await fetch('http://localhost:4000/user/deals', {
      headers: authHeader(),
    })
  
    const deals = await res.json();
    dispatch(setDeals(deals));
  };
  
export const toggleDeal = (id) => async (dispatch) => {

  console.log('123'); 

    const obj = JSON.stringify({toggle: true});
    console.log(obj);

    const options = {
        method: 'PATCH',
        headers: { 
          ...authHeader(),
          'Content-Type' : 'application/json'
        },
        body: obj
    }


   const res = await fetch(`http://localhost:4000/deal/${id}`,options);
   const deal = await res.json();
   dispatch(setDeal(deal));
}
