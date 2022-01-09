import React, { FC } from "react";
import { Link } from "react-router-dom";

interface Props {
  item: {
    title: string;
    description: string;
    price: number;
    id: string;
    img: {
      img: string;
    }[];
  };
}

const ItemCard: FC<Props> = ({ item }) => {
  const { title, description, price, img, id } = item;

  return (
    <article>
      <Link to={`/item/${id}`}>
        <img className="item-img" src={img[0].img} alt="" />
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
