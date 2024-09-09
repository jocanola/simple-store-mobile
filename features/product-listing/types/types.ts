import { ImageSourcePropType } from "react-native";

export interface ProductCardProps {
  index: number;
  image: ImageSourcePropType;
  name: string;
  price: number;
  originalPrice: number;
  discount: string;
}

export interface HeaderProps {
  title: string;
  onBackPress: () => void;
}
