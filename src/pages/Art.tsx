import React, { FC } from "react";
import { useSelector } from "react-redux";
import { StoreState } from "../store/reducers/rootReducer";

const Art: FC = () => {
  const items = useSelector((state: StoreState) => state.itemReducer.items);

  const filtered = items.filter((item) => {
    return item.section === "Art";
  });

  return (
    <>
      {filtered.map((item) => {
        return <p key={item.id}>{item.title}</p>;
      })}
    </>
  );
};
export default Art;
