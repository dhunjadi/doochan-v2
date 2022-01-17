import { IItem } from "../reducers/itemReducer";
import cartTypes from "../types/cartTypes";

export function AddToCart(itemToCart: IItem) {
  return {
    type: cartTypes.ADD_TO_CART,
    payload: itemToCart,
  };
}

export function removeOne(itemInCart: IItem) {
  return {
    type: cartTypes.REMOVE_ONE,
    payload: itemInCart,
  };
}

export function removeFromCart(itemInCart: IItem) {
  return {
    type: cartTypes.REMOVE_FROM_CART,
    payload: itemInCart,
  };
}
