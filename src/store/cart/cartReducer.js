import {
  ADD_PRODUCT_TO_CART,
  DECREASE_PRODUCT_QUANTITY,
  INCREASE_PRODUCT_QUANTITY,
  CHECK_OUT_CART,
} from "./cartTypes";

const initialState = {
  cartItems: [],
  totalItems: 0,
};

const cartReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      if (state.totalItems === 0) {
        let cart = {
          id:
            action.payload.id +
            action.payload.chosenAttributes.map((item) => item.id + item.value),
          productId: action.payload.id,
          quantity: 1,
          prices: action.payload.prices,
          allAttributes: action.payload.allAttributes,
          chosenAttributes: action.payload.chosenAttributes.map((item) => {
            return {
              id: item.id,
              value: item.value,
              name: item.id + item.value,
            };
          }),
          name: action.payload.name,
          brand: action.payload.brand,
          gallery: action.payload.gallery,
        };
        state.cartItems.push(cart);
      } else {
        let check = false;
        state.cartItems.map((item, key) => {
          if (
            item.id ===
            action.payload.id +
              action.payload.chosenAttributes.map(
                (item) => item.id + item.value
              )
          ) {
            state.cartItems[key].quantity++;
            check = true;
          }
        });
        if (!check) {
          let _cart = {
            id:
              action.payload.id +
              action.payload.chosenAttributes.map(
                (item) => item.id + item.value
              ),
            productId: action.payload.id,
            quantity: 1,
            prices: action.payload.prices,
            allAttributes: action.payload.allAttributes,
            chosenAttributes: action.payload.chosenAttributes.map((item) => {
              return {
                id: item.id,
                value: item.value,
                name: item.id + item.value,
              };
            }),
            name: action.payload.name,
            brand: action.payload.brand,
            gallery: action.payload.gallery,
          };
          state.cartItems.push(_cart);
        }
      }
      return {
        ...state,
        totalItems: state.totalItems + 1,
      };
    case DECREASE_PRODUCT_QUANTITY:
      state.cartItems.map((item, key) => {
        if (item.id === action.payload.id) {
          let quantity = state.cartItems[key].quantity;
          if (quantity > 1) {
            state.cartItems[key].quantity--;
          } else {
            state.cartItems.splice(key, 1);
            window.location.reload();
          }
        }
      });
      return {
        ...state,
        totalItems: state.totalItems - 1,
      };
    case INCREASE_PRODUCT_QUANTITY:
      state.cartItems.map(
        (item, key) =>
          item.id === action.payload.id && state.cartItems[key].quantity++
      );
      return {
        ...state,
        totalItems: state.totalItems + 1,
      };
    case CHECK_OUT_CART:
      state.cartItems.splice(0, state.cartItems.length);
      return {
        ...state,
        totalItems: 0,
      };
    default:
      return state;
  }
};

export default cartReducer;
