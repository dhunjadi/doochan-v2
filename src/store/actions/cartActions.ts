import { IItem } from "../reducers/itemReducer";
import cartTypes from "../types/cartTypes";

export function AddToCart(itemToCart: IItem) {
  return {
    type: cartTypes.ADD_TO_CART,
    payload: itemToCart,
  };
}
