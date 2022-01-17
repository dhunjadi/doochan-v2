import React, { FC } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { StoreState } from "../store/reducers/rootReducer";

const Cart: FC = () => {
  const cartItems = useSelector(
    (state: StoreState) => state.cartReducer.ItemsInCart
  );

  let cartTotal = cartItems.reduce(
    (qty, cartItem) => qty + cartItem.qty * cartItem.price,
    0
  );

  return cartItems.length > 0 ? (
    <div className="cart">
      <div className="item-container">
        {cartItems.map((cartItem) => {
          return <CartItem key={cartItem.id} cartItem={cartItem} />;
        })}
      </div>
      <span className="cart-total">Total: ${cartTotal}</span>
      <div className="cart-btns">
        <button className="clear-btn">Clear Cart</button>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  ) : (
    <p>Your cart is empty</p>
  );
};

export default Cart;
