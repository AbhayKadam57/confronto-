import { getSingleProduct } from "../../server";

export const addToCompare = (id) => (dispatch) => {
  getSingleProduct(id).then((data) => {
    console.log(data);

    return dispatch({ type: "ADD_TO_COMPARE", product: data });
  });
};

export const removeFromCompare = (id) => (dispatch) => {
  return dispatch({ type: "REMOVE_FROM_COMPARE", id: id });
};
