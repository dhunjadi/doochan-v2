import cartTypes from "../types/cartTypes";
import { AnyAction } from "redux";
import { IItem } from "./itemReducer";
import {
  handleAddToCart,
  handleRemoveFromCart,
  handleRemoveOne,
} from "../utils/cartUtils";

export interface cartReducerState {
  ItemsInCart: IItem[];
}

const initialState = {
  ItemsInCart: [],
};

export const cartReducer = (
  state: cartReducerState = initialState,
  action: AnyAction
): cartReducerState => {
  switch (action.type) {
    case cartTypes.ADD_TO_CART:
      return {
        ...state,
        ItemsInCart: handleAddToCart({
          prevCartItems: state.ItemsInCart,
          itemToCart: action.payload,
        }),
      };
    case cartTypes.REMOVE_ONE:
      return {
        ...state,
        ItemsInCart: handleRemoveOne({
          prevCartItems: state.ItemsInCart,
          itemToRemove: action.payload,
        }),
      };
    case cartTypes.REMOVE_FROM_CART:
      return {
        ...state,
        ItemsInCart: handleRemoveFromCart({
          prevCartItems: state.ItemsInCart,
          itemToRemove: action.payload,
        }),
      };
    default:
      return state;
  }
};
