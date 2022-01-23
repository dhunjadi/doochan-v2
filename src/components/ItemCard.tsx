import React, { FC } from "react";
import { Link } from "react-router-dom";
import { IItem } from "../store/reducers/itemReducer";

interface Props {
  item: IItem;
}

const ItemCard: FC<Props> = ({ item }) => {
  const { title, description, price, img, id } = item;

  return (
    <article>
      <Link to={`/item/${id}`}>
        <img className="item-img" src={img[0]} alt="" />
        <div className="item-title">
          <span>{title}</span>
        </div>
        <div className="item-description">
          <span>{description}</span>
        </div>
        <span className="item-price">${price}</span>
      </Link>
    </article>
  );
};

export default ItemCard;
