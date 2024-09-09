import { Image, StyleSheet, Platform, View, Text } from "react-native";

import ProductListing from "@/features/product-listing";
import { SafeAreaView } from "react-native-safe-area-context";
import Cart from "@/features/cart";

export default function CartScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Cart />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
