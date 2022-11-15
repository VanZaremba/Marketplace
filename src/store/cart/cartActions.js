import {
  ADD_PRODUCT_TO_CART,
  DECREASE_PRODUCT_QUANTITY,
  INCREASE_PRODUCT_QUANTITY,
  CHECK_OUT_CART,
} from "./cartTypes";

export const addProductToCart = (
  id,
  prices,
  allAttributes,
  chosenAttributes,
  name,
  brand,
  gallery
) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: {
      id: id,
      prices: prices,
      allAttributes: allAttributes,
      chosenAttributes: chosenAttributes,
      name: name,
      brand: brand,
      gallery: gallery,
    },
  };
};

export const decreaseProductQuantity = (id) => {
  return {
    type: DECREASE_PRODUCT_QUANTITY,
    payload: {
      id: id,
    },
  };
};

export const increaseProductQuantity = (id) => {
  return {
    type: INCREASE_PRODUCT_QUANTITY,
    payload: {
      id: id,
    },
  };
};

export const checkOutCart = () => {
  return {
    type: CHECK_OUT_CART,
    payload: null,
  };
};
