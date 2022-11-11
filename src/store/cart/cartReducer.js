import {
  ADD_PRODUCT_TO_CART,
  DECREASE_PRODUCT_QUANTITY,
  INCREASE_PRODUCT_QUANTITY,
} from "./cartTypes";

const initialState = {
  cartItems: [],
  totalItems: 0,
};

const cartReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      if (state.totalItems == 0) {
        let cart = {
          id:
            action.payload.id +
            action.payload.chosenAttributes.map((item) => item.id + item.value),
          productId: action.payload.id,
          quantity: 1,
          prices: action.payload.prices,
          allAttributes: action.payload.allAttributes,
          chosenAttributes: [action.payload.chosenAttributes],
          name: action.payload.name,
          brand: action.payload.brand,
        };
        state.cartItems.push(cart);
      } else {
        let check = false;
        state.cartItems.map((item, key) => {
          if (
            item.id ==
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
            chosenAttributes: [action.payload.chosenAttributes],
            name: action.payload.name,
            brand: action.payload.brand,
          };
          state.cartItems.push(_cart);
        }
      }
      return {
        ...state,
        totalItems: state.totalItems + 1,
      };

    // ...state,
    // ordersById: [...state.ordersById, action.payload.chosenAttributes],

    // const productId = action.payload.id;
    // const attributes = action.attributes;

    // const findIndex = function (array, cb) {
    //   if (array) {
    //     for (let i = 0; i < array.length; i++) {
    //       if (true === cb(array[i])) return i;
    //     }
    //   }
    //   return -1;
    // };

    // if (
    //   findIndex(
    //     state.cart,
    //     (product) =>
    //       product.id === productId && product.attributes === attributes
    //   ) !== -1
    // ) {
    //   const cart = state.cartItems.reduce((cartAcc, product) => {
    //     if (product.id === productId && product.attributes === attributes) {
    //       cartAcc.push({
    //         ...product,
    //         attributes: attributes,
    //         qty: parseInt(product.qty) + parseInt(action.qty),
    //         sum:
    //           (product.discount ? product.salePrice : product.price) *
    //           (parseInt(product.qty) + parseInt(action.qty)),
    //       }); // Increment qty
    //     } else {
    //       cartAcc.push(product);
    //     }
    //     return cartAcc;
    //   }, []);

    //   return { ...state, cart };
    // }
    // case ADD_PRODUCT_TO_CART:

    // if (state.totalItems > 0) {
    //   let cart = {
    //     id: action.payload.id,
    //     quantity: 1,
    //     prices: action.payload.prices,
    //     attributes: action.payload.attributes,
    //   };

    //   console.log("carrinho já tem 1 item", cart);
    // } else {
    //   let _cart = {
    //     id: action.payload.id,
    //     quantity: 1,
    //     prices: action.payload.prices,
    //     attributes: action.payload.attributes,
    //   };
    //   state.cartItems.push(_cart);
    //   console.log("carrinho vazio", _cart);
    // }

    // state.cartItems.push(cart);

    // if (state.totalItems == 0) {
    //   state.cartItems.push(cart);
    // } else {
    //   console.log("cheio");
    // }
    // if (state.totalItems == 0) {
    //   let cart = {
    //     id: action.payload.id,
    //     quantity: 1,
    //     prices: action.payload.prices,
    //     attributes: action.payload.attributes,
    //   };
    //   state.cartItems.push(cart);
    // } else {
    //   const element = state.cartItems.find(
    //     (item) => item.id === action.payload.id
    //   );
    //   if (element) {
    //     // const { attributes } = element;
    //     const { attributes } = action.payload;
    //     console.log(attributes);
    //   }
    // console.log(element);

    // if (element.attributes.find((attribute) => attribute.id == action)) {
    //   let cart2 = {
    //     id: action.payload.id,
    //     quantity: 1,
    //     prices: action.payload.prices,
    //     attributes: action.payload.attributes,
    //   };
    //   state.cartItems.push(cart2);
    // } else {
    //   console.log("atributo novo");
    // }
    // state.cartItems.map((item, key) => {
    //   console.log(item, action.payload);
    // });
    // state.cartItems.map((item, key) => {
    //   console.log(item);
    //   item.attributes.map((itemAttribute, index) => {
    //     action.payload.attributes.map((actionAttribute, index) => {
    //       console.log(itemAttribute, actionAttribute);
    //       if (itemAttribute.id === actionAttribute.id) {
    //         if (itemAttribute.value === actionAttribute.value) {
    //           console.log("value igual");
    //           state.cartItems[key].quantity++;
    //           check = true;
    //         }
    //         if (itemAttribute.value !== actionAttribute.value) {
    //           console.log("value diferente");
    //           let _cart = {
    //             id: action.payload.id,
    //             quantity: 1,
    //             prices: action.payload.prices,
    //             attributes: {
    //               id: actionAttribute.id,
    //               value: actionAttribute.value,
    //             },
    //           };
    //           state.cartItems.push(_cart);
    //         }
    //       }
    //     });
    //   });
    // });

    // let check = false;
    // state.cartItems.map((item, key) => {
    //   if (item.id == action.payload.id) {
    //     state.cartItems[key].quantity++;
    //     check = true;
    //   }
    // });
    // if (!check) {
    //   let _cart = {
    //     id: action.payload.id,
    //     quantity: 1,
    //     prices: action.payload.prices,
    //     attributes: action.payload.attributes,
    //   };
    //   state.cartItems.push(_cart);
    // }

    case DECREASE_PRODUCT_QUANTITY:
      state.cartItems.map((item, key) => {
        console.log(state.cartItems[key]);
        if (item.id == action.payload.id) {
          let quantity = state.cartItems[key].quantity;
          if (quantity > 1) {
            state.cartItems[key].quantity--;
          } else {
            state.cartItems.splice(key, 1);
          }
        }
      });
      return {
        ...state,
        totalItems: state.totalItems - 1,
      };
    default:
      return state;
  }
};

export default cartReducer;
