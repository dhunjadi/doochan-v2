import React, { FC } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
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
        {cartItems.map((cartItem) => {
          return <CartItem key={cartItem.id} cartItem={cartItem} />;
        })}
      </div>
    </div>
  ) : (
    <h1>Your cart is empty</h1>
  );
};

export default Cart;
