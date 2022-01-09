import { AddToCart } from "../actions/cartActions";

export interface cartState {
  cart: object[];
}

const initialState = {
  cart: [],
};

export const cartReducer = (
  state: cartState = initialState,
  action: { type: any; payload: object[] }
) => {
  switch (action.type) {
    case AddToCart:
      return { ...state.cart, items: action.payload };
    default:
      return state;
  }
};
