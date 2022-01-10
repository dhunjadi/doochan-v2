import { ADD_TO_CART } from "../actions/cartActions";
import { AnyAction } from "redux";

export interface cartReducerState {
  cart: {
    id: string;
    title: string;
    description: string;
    price: number;
    section: string;
    qty: number;
    img: {
      img: string;
    }[];
  }[];
}

const initialState = {
  cart: [],
};

export const cartReducer = (
  state: cartReducerState = initialState,
  action: AnyAction
): cartReducerState => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state.cart, cart: [...state.cart, { ...action.payload }] };
    default:
      return state;
  }
};
