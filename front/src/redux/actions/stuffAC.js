import {
  GET_STUFF,
  ADD_STUFF,
  DEL_STUFF,
  EDIT_STUFF,
} from "../types/stuffTypes";

export const addStuff = (stuff) => {
  return {
    type: ADD_STUFF,
    payload: stuff,
  };
};

export const getAllStuff = (stuff) => {
  return {
    type: GET_STUFF,
    payload: stuff,
  };
};

export const delStuff = (stuff) => {
  return {
    type: DEL_STUFF,
    payload: stuff,
  };
};

export const editStuff = () => {
  return {
    type: EDIT_STUFF,
  };
};

export const delOneStuffThunk = (id) => async (dispatch) => {
  const responseUser = await fetch("http://localhost:3001/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
    }),
  });
  const resultRes = await responseUser.json();
  dispatch(delStuff(resultRes));
};

export const editStuffThunk = (title, price, id) => async (dispatch) => {
  await fetch("http://localhost:3001/edit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      price,
      id,
    }),
  });
  dispatch(editStuff());
};

export const addOneStuff = (title, price) => async (dispatch) => {
  const responseUser = await fetch("http://localhost:3001/addstuff", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      price,
    }),
  });
  const resultRes = await responseUser.json();
  dispatch(addStuff(resultRes));
};

export const getAllStuffThunk = () => async (dispatch) => {
  const response = await fetch("http://localhost:3001");
  const stuff = await response.json();

  dispatch(getAllStuff(stuff));
};
