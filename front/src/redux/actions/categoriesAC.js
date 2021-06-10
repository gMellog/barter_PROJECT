import { GET_CATEGORIES } from "../types/categoriesTypes";
import { authHeader } from "../../helpers/authHeader";

export const getAllCategories = (categories) => {
  return {
    type: GET_CATEGORIES,
    payload: categories,
  };
};


export const getAllCategoriesThunk = () => async (dispatch) => {
  const response = await fetch("http://localhost:4000/category", {
    headers: authHeader(),
  });
  const categories = await response.json();
console.log("jhfhjgf", categories);
  dispatch(getAllCategories(categories));
}
