import React, { FC } from "react";
import { useSelector } from "react-redux";
import { StoreState } from "../store/reducers/rootReducer";

const Cart: FC = () => {
  const cartItems = useSelector(
    (state: StoreState) => state.cartReducer.ItemsInCart
  );

  return cartItems.length > 0 ? (
    <div className="cart">
      <h1 className="cart-total">Total: $</h1>
      <div className="cart-btns">
        <button className="clear-btn">Clear Cart</button>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>

      <div className="item-container">
        {cartItems.map((item) => {
          return (
            <p>
              title: {item.title}, price: ${item.price}, qty: {item.qty} = $
              {(item.price * item.qty).toFixed(2)}
            </p>
          );
        })}
      </div>
    </div>
  ) : (
    <h1>Your cart is empty</h1>
  );
};

export default Cart;
