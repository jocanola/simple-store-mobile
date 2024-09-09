import React, { FC } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { ProductCardProps } from "../types/types";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { useCart } from "@/store/cartContext";

const cardWidth = Dimensions.get("window").width - 48 - 24;

const ProductCard: FC<ProductCardProps> = (props) => {
  const router = useRouter();
  const { image, name, price, originalPrice, discount, index } = props;
  const showProductDetail = () => {
    router.push(`/products/${index}`);
  };

  return (
    <TouchableOpacity
      onPress={showProductDetail}
      style={[
        styles.container,
        (index + 1) % 2 === 0
          ? {
              marginLeft: 12,
            }
          : {
              marginRight: 12,
            },
      ]}
    >
      <Image source={image} style={styles.image} />
      <Text style={styles.name} numberOfLines={2}>
        {name}
      </Text>
      <Text style={styles.price}>${price}</Text>
      <View style={styles.priceInfo}>
        <Text style={styles.originalPrice}>${originalPrice}</Text>
        <Text style={styles.discount}>{discount} Off</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: cardWidth / 2,
    padding: 12,
    borderColor: Colors.gray,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 24,
    gap: 8,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  name: {
    marginTop: 5,
    fontSize: 12,
    lineHeight: 24,
    fontWeight: "bold",
    color: "black",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.primaryBrand,
  },
  priceInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  originalPrice: {
    fontSize: 12,
    textDecorationLine: "line-through",
    color: "#888",
  },
  discount: {
    fontSize: 12,
    color: "red",
  },
});

export default ProductCard;
