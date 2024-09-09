import { ReactNode } from "react";
import { ImageSourcePropType } from "react-native";

export interface ProductCardProps {
  index: number;
  image: ImageSourcePropType;
  name: string;
  price: number;
  originalPrice: number;
  discount: string;
}

export interface CartItem extends ProductCardProps {
  quantity: number;
  subtotal: number;
}

export interface CartState {
  cart: CartItem[];
}

export type CartAction =
  | { type: "ADD_TO_CART"; product: ProductCardProps }
  | { type: "INCREASE_QUANTITY"; index: number }
  | { type: "DECREASE_QUANTITY"; index: number }
  | { type: "REMOVE_FROM_CART"; index: number }
  | { type: "CLEAR_CART" };

export interface CartContextProps {
  cart: CartItem[];
  addToCart: (product: ProductCardProps) => void;
  increaseQuantity: (index: number) => void;
  decreaseQuantity: (index: number) => void;
  removeFromCart: (index: number) => void;
  clearCart: () => void;
  totalPrice: number;
  subTotal: number;
}

export interface CartProviderProps {
  children: ReactNode;
}

export interface OrderSummaryProps {
  data: {
    itemsCount: number;
    subTotal: number;
    shipping: number;
    importCharges: number;
    total: number;
  };
}
