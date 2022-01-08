import React, { FC } from "react";

interface Props {
  item: {
    title: string;
    description: string;
    price: number;
    img: {
      img1: string;
    };
  };
}

const ItemCard: FC<Props> = ({ item }) => {
  const { title, description, price, img } = item;

  return (
    <article>
      <img className="item-img" src={img.img1} alt="" />
      <div className="item-title">
        <span>{title}</span>
      </div>
      <div className="item-description">
        <span>{description}</span>
      </div>
      <span className="item-price">${price}</span>
    </article>
  );
};

export default ItemCard;
