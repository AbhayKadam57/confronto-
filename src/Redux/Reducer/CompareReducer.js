const InitState = {
  products: [],
};

export default function (state = InitState, action) {
  switch (action.type) {
    case "ADD_TO_COMPARE": {
      let Id = action.product.id;

      let index = state.products.findIndex((item, id) => item.id === Id);

      if (index < 0) {
        return {
          products: [...state.products, action.product],
        };
      } else {
        return state;
      }
    }
    case "REMOVE_FROM_COMPARE": {
      let Id = action.id;

      return {
        ...state,
        products: state.products.filter((item, id) => item.id !== Id),
      };
    }
    default: {
      return state;
    }
  }
}
