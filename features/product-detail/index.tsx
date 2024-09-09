import Header from "@/components/Header/Header";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  StatusBar,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import RatingStars from "./components/RatingIcon";
import SizeSelector from "./components/SizeSelector";
import AddToCartButton from "@/components/Button/AppButton";
import { useLocalSearchParams, useRouter } from "expo-router";
import { products } from "../product-listing/utils/constant";
import { Colors, statusBarHeight } from "@/constants/Colors";
import { useCart } from "@/store/cartContext";

const ProductDetail = () => {
  const router = useRouter();
  const { addToCart } = useCart();
  const { id } = useLocalSearchParams();
  const [selectedSize, setSelectedSize] = useState("7");

  const productInfo = products.find((item) => item.index.toString() === id);
  const handleAddToCart = () => {
    if (productInfo) {
      addToCart(productInfo);
      Alert.alert(`${productInfo.name} Added to Cart`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={productInfo ? productInfo.name : "Product Detail Page"}
        onBackPress={() => router.back()}
      />

      <Image
        source={productInfo?.image}
        style={styles.productImage}
        resizeMode="cover"
      />

      <View style={styles.productInfo}>
        <View style={styles.nameAndFavorite}>
          <Text style={styles.productName}>{productInfo?.name}</Text>
          <TouchableOpacity>
            <Icon name="heart-outline" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        <RatingStars rating={4} />

        <Text style={styles.price}>${productInfo?.price}</Text>

        <Text style={styles.sizeLabel}>Select Size</Text>
        <SizeSelector
          sizes={["6", "6.5", "7", "7.5", "8", "8.5"]}
          selectedSize={selectedSize}
          onSelectSize={setSelectedSize}
        />
      </View>

      <AddToCartButton title="Add To Cart" onPress={handleAddToCart} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: statusBarHeight,
  },
  productImage: {
    width: "100%",
    height: 300,
  },
  productInfo: {
    paddingTop: 20,
    paddingHorizontal: 24,
    gap: 12,
  },
  nameAndFavorite: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#223263",
  },
  price: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.primaryBrand,
    marginTop: 10,
  },
  sizeLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
});

export default ProductDetail;
