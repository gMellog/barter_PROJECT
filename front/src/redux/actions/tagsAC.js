import { SET_TAGS } from "../types/tagsTypes";
import { authHeader } from "../../helpers/authHeader";

export const setTags = (tags) => {
  return {
    type: SET_TAGS,
    payload: tags
  }
}

export const getTagsThunks = () => async (dispatch) => {
  const resTags = await fetch('http://localhost:4000/tags', {
    headers: authHeader(),
  })

  const resultTags = await resTags.json();
  dispatch(setTags(resultTags));
};
