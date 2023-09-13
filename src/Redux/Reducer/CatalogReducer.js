const InitState = {
  products: [],
  selected: null,
};

export default function (state = InitState, action) {
  switch (action.type) {
    case "INITIAL_PRODUCTS": {
      return {
        selected: null,
        products: action.products,
      };
    }
    case "PRODUCT_DETAILS": {
      return {
        ...state,
        selected: action.selected,
      };
    }
    default:
      return state;
  }
}
