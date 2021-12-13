import React, { FC } from "react";
import { useSelector } from "react-redux";
import { itemsState } from "../store/reducers/itemReducer";

const Art: FC = () => {
  const items = useSelector<itemsState, itemsState["items"]>(
    (state) => state.items
  );

  console.log(items); // undefined
  return <div>Art</div>;
};

export default Art;
