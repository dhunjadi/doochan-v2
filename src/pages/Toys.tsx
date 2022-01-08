import React, { FC } from "react";
import { useSelector } from "react-redux";
import ItemCard from "../components/ItemCard";
import { StoreState } from "../store/reducers/rootReducer";

const Toys: FC = () => {
  const items = useSelector((state: StoreState) => state.itemReducer.items);

  const filtered = items.filter((item) => {
    return item.section === "Toys";
  });

  return (
    <div className="item-container">
      {filtered.map((item) => {
        return <ItemCard key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Toys;
