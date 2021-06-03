import { GET_USER, ADD_USER, USER_BUY, USER_REMOVE } from "../types/userTypes";

export const getUser = (user) => {
  return {
    type: GET_USER,
    payload: user,
  };
};

export const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

export const userBuy = (user) => {
  return {
    type: USER_BUY,
    payload: user,
  };
};

export const userRemoveStuff = (stuffId) => {
  return {
    type: USER_REMOVE,
    payload: stuffId,
  };
};

export const getOneUser = (login, password) => async (dispatch) => {
  let responseUser = await fetch("http://localhost:3001/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      login,
      password,
    }),
  });
  let resultRes = await responseUser.json();
  dispatch(getUser(resultRes));
};

export const addOneUser = (name, password) => async (dispatch) => {
  const responseUser = await fetch("http://localhost:3001/registration", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      password,
    }),
  });
  const resultRes = await responseUser.json();
  // console.log(resultRes);
  dispatch(addUser(resultRes));
};

export const userBuyStuffThunk = (userId, stuffId) => async (dispatch) => {
  const responseUser = await fetch("http://localhost:3001/userstuff/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: userId,
      stuff: stuffId,
    }),
  });
  const resultRes = await responseUser.json();
  dispatch(userBuy(resultRes));
};

export const userRemoveStuffThunk = (userId, stuffId) => async (dispatch) => {
  const responseUser = await fetch("http://localhost:3001/userstuff/remove", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: userId,
      stuffId,
    }),
  });
  if (responseUser.ok) {
    dispatch(userRemoveStuff(stuffId));
  }
};
