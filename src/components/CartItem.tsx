import React, { FC } from "react";
import { useDispatch } from "react-redux";
import {
  AddToCart,
  removeFromCart,
  removeOne,
} from "../store/actions/cartActions";
import { IItem } from "../store/reducers/itemReducer";

interface CartItemProps {
  cartItem: IItem;
}

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { title, description, price, qty, img } = cartItem;
  const dispatch = useDispatch();

  const handleAddOneItem = (cartItem: IItem) => {
    dispatch(AddToCart(cartItem));
  };

  const handleRemoveOneItem = (cartItem: IItem) => {
    dispatch(removeOne(cartItem));
  };

  const handleRemoveItemFromCart = (cartItem: IItem) => {
    dispatch(removeFromCart(cartItem));
  };

  return (
    <>
      <div className="cart-item">
        <img src={img[0]} alt="" />
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
          <button onClick={() => handleRemoveOneItem(cartItem)}>-</button>
          <span>{qty}</span>
          <button onClick={() => handleAddOneItem(cartItem)}>+</button>
        </div>

        <div className="item-total">
          <span>${price * qty}</span>
        </div>

        <div className="remove-btn">
          <button onClick={() => handleRemoveItemFromCart(cartItem)}>
            Remove
          </button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default CartItem;
