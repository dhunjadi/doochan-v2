import { combineReducers } from "redux";
import { itemReducer, itemReducerState } from "./itemReducer";
import { cartReducer, cartReducerState } from "./cartReducer";

export interface StoreState {
  itemReducer: itemReducerState;
  cartReducer: cartReducerState;
}

export const rootReducer = combineReducers({
  itemReducer,
  cartReducer,
});
