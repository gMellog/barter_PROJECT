import { GET_PRODUCTS} from "../types/productsType";
import { authHeader } from "../../helpers/authHeader";

export const getAllProducts = (products) => {
  return {
    type: GET_PRODUCTS,
    payload: products,
  };
};



export const getAllProductsThunks = () => async (dispatch) => {
  const resUser = await fetch('http://localhost:4000/products', {
    headers: authHeader(),
  })
  const resultUser = await resUser.json();
  console.log(resultUser);
  dispatch(getAllProducts(resultUser));
};

