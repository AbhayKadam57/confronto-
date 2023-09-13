import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import CatalogReducer from "./Reducer/CatalogReducer";
import CompareReducer from "./Reducer/CompareReducer";
import thunk from "redux-thunk";

const store = createStore(
  combineReducers({
    catalog: CatalogReducer,
    compare: CompareReducer,
  }),
  applyMiddleware(thunk)
);

export default store;
