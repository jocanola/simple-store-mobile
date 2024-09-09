import { CartAction, CartState } from "@/types/types";

export const cartReducer = (
  state: CartState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.cart.find(
        (item) => item.index === action.product.index
      );
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.index === action.product.index
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                  subtotal: (item.quantity + 1) * item.price,
                }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [
            ...state.cart,
            { ...action.product, quantity: 1, subtotal: action.product.price },
          ],
        };
      }
    }
    case "INCREASE_QUANTITY": {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.index === action.index
            ? {
                ...item,
                quantity: item.quantity + 1,
                subtotal: (item.quantity + 1) * item.price,
              }
            : item
        ),
      };
    }
    case "DECREASE_QUANTITY": {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.index === action.index && item.quantity > 1
            ? {
                ...item,
                quantity: item.quantity - 1,
                subtotal: (item.quantity - 1) * item.price,
              }
            : item
        ),
      };
    }
    case "REMOVE_FROM_CART": {
      return {
        ...state,
        cart: state.cart.filter((item) => item.index !== action.index),
      };
    }
    case "CLEAR_CART": {
      return { ...state, cart: [] };
    }
    default:
      return state;
  }
};
