import { SET_USER, LOGOUT_USER, DELETE_AVATAR_USER } from "../types/userTypes";
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
export const deleteAvatartUser = (user) => {
  console.log('work');
  return {
    type: DELETE_AVATAR_USER,
    payload: user
  }
}

export const deleteAvatartUserThunks = (id) => async (dispatch) => {
  console.log(id);

  let resUser = await fetch('http://localhost:4000/user/avatar', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...authHeader(),
    },
    body: JSON.stringify({
      id
    })
  })
  resUser = await resUser.json();
  dispatch(deleteAvatartUser(resUser));

}

export const getUserThunks = () => async (dispatch) => {

  const userLoc = JSON.parse(localStorage.getItem('user'));

  if (userLoc) {
    const resUser = await fetch(`http://localhost:4000/user/${userLoc.id}`, {
      headers: authHeader(),
    })

    const {user} = await resUser.json();
    console.log('USER =>>>>>>>', user);  
    dispatch(setUser(user));
  }
};

