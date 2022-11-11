import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  SET_PRODUCT_ATTRIBUTES,
  DECREASE_PRODUCT_QUANTITY,
  INCREASE_PRODUCT_QUANTITY,
} from "./cartTypes";

export const addProductToCart = (
  id,
  prices,
  allAttributes,
  chosenAttributes,
  name,
  brand
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

export const setProductAttributes = (productID, id, value) => {
  console.log(productID, id, value);
  return {
    type: SET_PRODUCT_ATTRIBUTES,
    payload: {
      productID: productID,
      id: id,
      value: value,
    },
  };
};
