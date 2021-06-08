import { SET_USER, LOGOUT_USER } from "../types/userTypes";
import { authHeader } from "../../helpers/authHeader";

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user
  }
}

export const getUserThunks = () => async (dispatch) => {
  const resUser = await fetch('http://localhost:4000/user', {
    headers: authHeader(),
  })

  console.log('xxxx123xxxx');
  const resultUser = await resUser.json();
  console.log(resultUser);
  dispatch(setUser(resultUser));
};

