import {
  CartContextProps,
  CartProviderProps,
  CartState,
  ProductCardProps,
} from "@/types/types";
import React, { createContext, useReducer, useContext, ReactNode } from "react";
import { cartReducer } from "./cartReducer";

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: CartProviderProps) => {
  const initialState: CartState = { cart: [] };
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product: ProductCardProps) => {
    dispatch({ type: "ADD_TO_CART", product });
  };

  const increaseQuantity = (index: number) => {
    dispatch({ type: "INCREASE_QUANTITY", index });
  };

  const decreaseQuantity = (index: number) => {
    dispatch({ type: "DECREASE_QUANTITY", index });
  };

  const removeFromCart = (index: number) => {
    dispatch({ type: "REMOVE_FROM_CART", index });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const totalPrice = state.cart.reduce((acc, item) => acc + item.subtotal, 0);
  const subTotal = state.cart.reduce((acc, item) => acc + item.price, 0);
  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        totalPrice,
        subTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
