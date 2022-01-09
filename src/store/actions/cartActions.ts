import { itemsState } from "../reducers/itemReducer";

export function AddToCart(items: itemsState) {
  return {
    type: "ADD_TO_CART",
    payload: items,
  };
}
