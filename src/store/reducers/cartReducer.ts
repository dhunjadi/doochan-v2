import cartTypes from "../types/cartTypes";
import { AnyAction } from "redux";
import { IItem } from "./itemReducer";
import { handleAddToCart } from "../utils/cartUtils";

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
    default:
      return state;
  }
};
