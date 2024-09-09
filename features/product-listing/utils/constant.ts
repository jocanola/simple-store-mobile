import { ProductCardProps } from "../types/types";

export const products: ProductCardProps[] = [
  {
    index: 0,
    image: require("../../../assets/images/NikeAir1.png"),
    name: "FS - Nike Air Max 270 React",
    price: 299.43,
    originalPrice: 534.33,
    discount: "24%",
  },
  {
    index: 1,
    image: require("../../../assets/images/NikeAir1.png"),
    name: "FS - QUILTED MAXI CROSS",
    price: 99.99,
    originalPrice: 149.99,
    discount: "33%",
  },
  {
    index: 2,
    image: require("../../../assets/images/NikeAir2.png"),
    name: "FS - Air Zoom Pegasus 36",
    price: 187.6,
    originalPrice: 220.5,
    discount: "15%",
  },
  {
    index: 3,
    image: require("../../../assets/images/NikeAir3.png"),
    name: "FS - Nike Phantom GT2",
    price: 199.99,
    originalPrice: 250.0,
    discount: "20%",
  },
  {
    index: 4,
    image: require("../../../assets/images/NikeAir4.png"),
    name: "FS - Nike Blazer Mid '77",
    price: 160.0,
    originalPrice: 200.0,
    discount: "20%",
  },
  {
    index: 5,
    image: require("../../../assets/images/NikeAir1.png"),
    name: "FS - Nike Air Force 1 '07",
    price: 90.0,
    originalPrice: 120.0,
    discount: "25%",
  },
  {
    index: 6,
    image: require("../../../assets/images/NikeAir2.png"),
    name: "FS - Nike React Infinity Run",
    price: 160.75,
    originalPrice: 230.0,
    discount: "30%",
  },
  {
    index: 7,
    image: require("../../../assets/images/NikeAir3.png"),
    name: "FS - Nike ZoomX Vaporfly",
    price: 275.0,
    originalPrice: 399.99,
    discount: "31%",
  },
  {
    index: 8,
    image: require("../../../assets/images/NikeAir4.png"),
    name: "FS - Nike Mercurial Superfly 8",
    price: 225.0,
    originalPrice: 300.0,
    discount: "25%",
  },
  {
    index: 9,
    image: require("../../../assets/images/NikeAir1.png"),
    name: "FS - Nike Air Zoom Alphafly",
    price: 375.5,
    originalPrice: 500.0,
    discount: "25%",
  },
];

export const categories = [
  {
    id: "1",
    label: "Man Shirt",
    icon: require("../../../assets/icons/shirt.png"),
  },
  { id: "2", label: "Dress", icon: require("../../../assets/icons/dress.png") },
  {
    id: "3",
    label: "Man Work Equipment",
    icon: require("../../../assets/icons/man bag.png"),
  },
  {
    id: "4",
    label: "Woman Bag",
    icon: require("../../../assets/icons/woman bag.png"),
  },
  {
    id: "5",
    label: "Man Work Equipment",
    icon: require("../../../assets/icons/man bag.png"),
  },
  {
    id: "6",
    label: "Woman Bag",
    icon: require("../../../assets/icons/woman bag.png"),
  },
];
