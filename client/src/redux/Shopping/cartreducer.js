import * as actiontypes from "./actiontypes";
import { useSelector } from "react-redux";

const existItem = () => {};
const initialState = {
  cart: [],
};
export const cartreducer = (state = initialState, action) => {
  // const products = useSelector(state.productreducer.products);
  switch (action.type) {
    case actiontypes.ADD_TO_CART:
      const item = action.payload;
      console.log("item", item);
      // console.log("item", item);
      console.log("item.id", item[0].id);

      let itemExist = false;
      state.cart.forEach((obj) => {
        console.log("obj", obj);
        if (obj[0].id === item[0].id) itemExist = true;
      });
      // console.log("exist item value", itemExist);
      // const itemExist = state.cart.find((x) =>
      //   x.id === item.id ? true : false
      // );

      console.log(itemExist);
      if (itemExist) {
        // const newItem = { ...item };
        // console.log("new item if exist", newItem);

        state.cart.map((obj) => {
          console.log("obj.qty after inc", obj);
          if (obj[0].id === item[0].id) {
            obj.qty++;
          }
          console.log("obj", obj);
          console.log("obj.qty after inc", obj.qty);
        });
        return {
          ...state,
          // cart: [...state.cart],
        };
      } else {
        return { ...state, cart: [...state.cart, { ...item, qty: 1 }] };
      }

    // var existItem = "";
    // var productItem = {};
    // state.cart.map((obj) => {
    //   if (obj.id === item.id) {
    //     existItem = item.id;
    //   }
    // });

    // if (existItem != "") {
    //   productItem = state.cart.filter((obj) => {
    //     return obj.id === existItem;
    //   });
    // }

    // if (existItem != "") {
    //   console.log("shubham");
    //   return {
    //     ...state,
    //     cart: [...state.cart, { ...productItem, qty: qty + 1 }],
    //   };
    // } else {
    //   return {
    //     ...state,
    //     cart: [...state.cart, { ...item, qty: 1 }],
    //   };
    // }
    // console.log("existItem", existItem);

    // if (existItem) {
    //   return {
    //     ...state,
    //     cart: state.cart.map((obj) =>
    //       obj.id === existItem.id ? { ...obj, qty: obj.qty + 1 } : obj
    //     ),
    //     // cart: [...state.cart],
    //   };
    // } else {
    //   return {
    //     ...state,
    //     cart: [...state.cart, { ...item, qty: 1 }],
    //   };
    // }

    // const item = state.products.find((x) => x.id === action.payload.id);
    // //chech that product is already present in the cart or not
    // var inCart = false;
    // if(state.cart!= undefined){
    //  inCart = state.cart.find((item) =>
    //     item._id === action.payload.id ? true : false
    // );}
    // return {
    //     // First we are checking that if item id present in the cart that we are updating the quantity otherwise we are taking the quantity as 1
    //     ...state,
    //     cart: inCart
    //       ? state.cart.map((item) =>
    //           item._id === action.payload.id
    //             ? { ...item, qty: item.qty + 1 }
    //             : item
    //         )
    //       : [...state.cart, { ...item, qty: 1 }],
    // };

    case actiontypes.REMOVE:
      return {
        ...state,
        cart: state.cart.filter((item) => item[0].id != action.payload.id),
      };

    case actiontypes.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item[0].id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };

    case actiontypes.CLEAR_CART:
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};
