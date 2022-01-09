import { combineReducers } from "redux";
import { itemReducer, itemsState } from "./itemReducer";
import { cartReducer, cartState } from "./cartReducer";

export interface StoreState {
  itemReducer: itemsState;
  cartReducer: cartState;
}

export const rootReducer = combineReducers({
  itemReducer,
  cartReducer,
});
