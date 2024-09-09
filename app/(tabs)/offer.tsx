import { Image, StyleSheet, Platform, View, Text } from "react-native";

import ProductListing from "@/features/product-listing";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OfferScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Offer</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
