import { SET_CURRENCY } from "./currencyTypes";

export const setCurrency = (label, symbol) => {
  return {
    type: SET_CURRENCY,
    payload: { label, symbol },
  };
};
