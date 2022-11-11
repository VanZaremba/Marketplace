import { SET_CURRENCY } from "./currencyTypes";

const initialState = {
  currencyLabel: "USD",
  currencySymbol: "$",
};

const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENCY:
      return {
        ...state,
        currencyLabel: action.payload.label,
        currencySymbol: action.payload.symbol,
      };
    default:
      return state;
  }
};

export default currencyReducer;
