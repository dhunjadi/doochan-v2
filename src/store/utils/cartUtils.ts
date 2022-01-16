import { IItem } from "../reducers/itemReducer";

export const existingCartItem = ({ prevCartItems, itemToCart }: any) => {
  return prevCartItems.find((cartItem: IItem) => cartItem.id === itemToCart.id);
};

export const handleAddToCart = ({ prevCartItems, itemToCart }: any) => {
  const cartItemExists = existingCartItem({ prevCartItems, itemToCart });

  if (cartItemExists) {
    return prevCartItems.map((cartItem: IItem) =>
      cartItem.id === itemToCart.id
        ? {
            ...cartItem,
            qty: cartItem.qty + 1,
          }
        : cartItem
    );
  }

  return [
    ...prevCartItems,
    {
      ...itemToCart,
      qty: 1,
    },
  ];
};
