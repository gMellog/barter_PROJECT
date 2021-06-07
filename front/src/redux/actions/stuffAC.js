import { GET_STUFF, SEARCH_STUFF } from "../types/stuffTypes";

export const getAllStuff = (stuff) => {
  return {
    type: GET_STUFF,
    payload: stuff,
  };
};

export const searchAll = (stuff) => {
  return {
    type: SEARCH_STUFF,
    payload: stuff,
  };
};

export const getSearchCategoriesThunks = (category) => async (dispatch) => {
  const responseUser = await fetch(`http://localhost:3001/${category}`)
  const resultRes = await responseUser.json();
  dispatch(searchAll(resultRes));
};

export const getAllSearchThunk = (name) => async (dispatch) => {
  const responseUser = await fetch("http://localhost:3001/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
    }),
  });
  const resultRes = await responseUser.json();
  dispatch(searchAll(resultRes));
};

export const getAllStuffThunk = () => async (dispatch) => {
  const response = await fetch("http://localhost:3001/products");
  const stuff = await response.json();

  dispatch(getAllStuff(stuff));
};
