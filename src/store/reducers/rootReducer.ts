import { combineReducers } from "redux";
import { itemReducer, itemsState } from "./itemReducer";

export interface StoreState {
  itemReducer: itemsState;
}

export const rootReducer = combineReducers({
  itemReducer,
});
