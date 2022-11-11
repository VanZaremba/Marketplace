import { SET_CATEGORY } from "./categoryTypes";

export const setCategory = (category) => {
  return {
    type: SET_CATEGORY,
    payload: category,
  };
};
