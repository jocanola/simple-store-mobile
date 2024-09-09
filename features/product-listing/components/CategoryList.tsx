import React, { FC } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import { categories } from "../utils/constant";

const CategoryItem: FC<{ label: string; icon: ImageSourcePropType }> = ({
  label,
  icon,
}) => (
  <View style={styles.categoryItem}>
    <View style={styles.categoryIconContainer}>
      <Image source={icon} style={styles.icon} />
    </View>

    <Text numberOfLines={2} style={styles.label}>
      {label}
    </Text>
  </View>
);

const CategoryList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Category</Text>
        <Text style={styles.moreCategory}>More Category</Text>
      </View>

      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <CategoryItem label={item.label} icon={item.icon} />
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2C3E50",
  },
  moreCategory: {
    fontSize: 16,
    color: "#F39C12",
  },
  content: {
    width: "98%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  flatListContent: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
  categoryItem: {
    width: 70,
    alignItems: "center",
    margin: 10,
  },
  categoryIconContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",

    borderColor: "#EBF0FF",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  icon: {
    width: 18,
    height: 18,
  },
  label: {
    fontSize: 10,
    textAlign: "center",
    color: "#9098B1",
  },
});

export default CategoryList;
