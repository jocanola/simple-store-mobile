import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  FlatList,
} from "react-native";
import SearchBar from "./components/Searchbar";
import FlashSaleBanner from "./components/FlashSaleBanner";
import CategoryIcons from "./components/CategoryList";
import ProductCard from "./components/ProductCard";
import { products } from "./utils/constant";
import { Colors } from "@/constants/Colors";

const ProductListing = () => {
  const [searchParams, setSeachParams] = useState("");

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchParams.toLowerCase())
  );

  return (
    <>
      <View style={styles.header}>
        <SearchBar setSeachParams={setSeachParams} />
        <View style={styles.headerIcons}>
          <View style={styles.notification}>
            <Image source={require("../../assets/icons/favorite.png")} />
            {/* <View style={styles.cartQuatity}>
              <Text style={styles.cartQuatityText}>{cart.length}</Text>
            </View> */}
          </View>

          <View style={styles.notification}>
            <Image source={require("../../assets/icons/notification.png")} />
            <View style={styles.notifcationIndicator} />
          </View>
        </View>
      </View>

      <ScrollView style={styles.container}>
        <FlashSaleBanner />
        <CategoryIcons />
        <View style={styles.flashSaleSection}>
          <Text style={styles.sectionTitle}>Flash Sale</Text>
          <Text style={styles.seeMore}>See More</Text>
        </View>

        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => `${item.index}`}
          numColumns={2}
          style={{ marginTop: 12 }}
          renderItem={({ item }) => (
            <ProductCard
              index={item.index}
              key={item.name}
              image={item.image}
              name={item.name}
              price={item.price}
              originalPrice={item.originalPrice}
              discount={item.discount}
            />
          )}
        />

        <View style={{ height: 150 }} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 16,
    gap: 16,
    borderBottomColor: "#EBF0FF",
    borderBottomWidth: 1,
  },
  notification: {
    position: "relative",
  },
  notifcationIndicator: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 8,
    height: 8,
    backgroundColor: "#FB7181",
    borderRadius: 5,
    // zIndex: 1,
  },
  cartQuatity: {
    position: "absolute",
    top: -5,
    right: -5,
    width: 15,
    height: 15,
    backgroundColor: Colors.primaryBrand,
    borderRadius: 7.5,
    justifyContent: "center",
    alignItems: "center",
  },
  cartQuatityText: {
    color: "white",
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  flashSaleSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  seeMore: {
    color: Colors.primaryBrand,
  },
});

export default ProductListing;
