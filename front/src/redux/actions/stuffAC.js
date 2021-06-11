import { GET_STUFF, SEARCH_STUFF, SORT_BY_NAME } from "../types/stuffTypes";
import { authHeader } from "../../helpers/authHeader";

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

export const sortByName = () => {
  return {
    type: SORT_BY_NAME,
  };
};

export const getSearchCategoriesThunks = (category) => async (dispatch) => {
  const responseUser = await fetch("http://localhost:4000/searchcategory", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      category,
    }),
  });
  const resultRes = await responseUser.json();
  dispatch(searchAll(resultRes));
};

export const getAllSearchThunk = (name) => async (dispatch) => {
  const responseUser = await fetch("http://localhost:4000/search", {
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
  const response = await fetch("http://localhost:4000/products", {
    headers: authHeader(),
  });
  const stuff = await response.json();

  dispatch(getAllStuff(stuff));
};
