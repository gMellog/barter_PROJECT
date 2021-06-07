import { GET_USER, LOGOUT_USER } from "../types/userTypes";
import { authHeader } from "../../helpers/authHeader";

export const getOneUser = (user) => {
  return {
    type: GET_USER,
    payload: user,
  };
};


export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const getUserThunks = () => async (dispatch) => {
  const resUser = await fetch('http://localhost:4000/user', {
    headers: authHeader(),
  })
  const resultUser = await resUser.json();
  console.log(resultUser);
  dispatch(getOneUser(resultUser));
};

