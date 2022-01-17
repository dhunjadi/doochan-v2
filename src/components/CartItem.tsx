import React, { FC } from "react";

interface CartItemProps {
  cartItem: {
    title: string;
    description: string;
    price: number;
    id: string;
    qty: number;
    img: {
      img: string;
    }[];
  };
}

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { title, description, price, qty, img } = cartItem;
  return (
    <>
      <div className="cart-item">
        <img src={img[0].img} alt="" />
        <div className="details">
          <div className="title">
            <h3>{title}</h3>
          </div>

          <div className="description">
            <p>{description}</p>
          </div>
        </div>

        <div className="price">
          <span>${price}</span>
        </div>

        <div className="qty-input">
          <button>-</button>
          <span>{qty}</span>
          <button>+</button>
        </div>

        <div className="item-total">
          <span>$ ITEM TOTAL</span>
        </div>

        <div className="remove-btn">
          <button>Remove</button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default CartItem;
