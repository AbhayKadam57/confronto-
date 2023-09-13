import { getAllProducts, getSingleProduct } from "../../server";

export const initCatalog = () => (dispatch) => {
  getAllProducts().then((data) => {
    return dispatch({ type: "INITIAL_PRODUCTS", products: data });
  });
};

export const ProductDetails = (id) => (dispatch) => {
  getSingleProduct(id).then((data) => {
    console.log(data);
    return dispatch({ type: "PRODUCT_DETAILS", selected: data });
  });
};
