import { combineReducers } from "redux";
import categoryReducer from "./category/categoryReducers";
import currencyReducer from "./currency/currencyReducers";
import cartReducer from "./cart/cartReducer";

const rootReducer = combineReducers({
  categoryReducer,
  currencyReducer,
  cartReducer,
});

export default rootReducer;
