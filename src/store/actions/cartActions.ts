import { itemReducerState } from "../reducers/itemReducer";

export const ADD_TO_CART = "ADD_TO_CART";

export function AddToCart(itemToCart: itemReducerState) {
  return {
    type: "ADD_TO_CART",
    payload: itemToCart,
  };
}
