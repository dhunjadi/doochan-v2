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

export const handleRemoveOne = ({ prevCartItems, itemToRemove }: any) => {
  const existingCartItem = prevCartItems.find(
    (cartItem: IItem) => cartItem.id === itemToRemove.id
  );

  if (existingCartItem.qty === 1) {
    return prevCartItems.filter(
      (cartItem: IItem) => cartItem.id !== existingCartItem.id
    );
  }

  return prevCartItems.map((cartItem: IItem) =>
    cartItem.id === existingCartItem.id
      ? {
          ...cartItem,
          qty: cartItem.qty - 1,
        }
      : cartItem
  );
};

export const handleRemoveFromCart = ({ prevCartItems, itemToRemove }: any) => {
  const clickedItem = prevCartItems.find(
    (cartItem: IItem) => cartItem.id === itemToRemove.id
  );

  return prevCartItems.filter(
    (cartItem: IItem) => cartItem.id !== clickedItem.id
  );
};
