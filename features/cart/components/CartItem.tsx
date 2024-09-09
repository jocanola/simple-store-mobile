import { Colors } from "@/constants/Colors";
import { useCart } from "@/store/cartContext";
import { MaterialIcons } from "@expo/vector-icons";
import React, { FC } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const CartItem: FC<{ item: any }> = ({ item }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.details}>
        <View style={styles.priceQuantity}>
          <Text numberOfLines={2} style={styles.name}>
            {item.name}
          </Text>
          <View style={styles.actions}>
            <TouchableOpacity>
              <Icon
                name={item.isFavorite ? "heart" : "heart-outline"}
                size={24}
                color={item.isFavorite ? "red" : "#000"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => removeFromCart(item.index)}
              style={styles.deleteButton}
            >
              <MaterialIcons name="delete-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.priceQuantity}>
          <Text style={styles.price}>${item.price.toFixed(2)}</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={[
                styles.quantityButton,
                { borderTopLeftRadius: 5, borderBottomLeftRadius: 5 },
              ]}
              onPress={() => decreaseQuantity(item.index)}
            >
              <Icon name="remove" size={20} color="#9098B1" />
            </TouchableOpacity>
            <Text style={styles.quantity}>{item.quantity}</Text>
            <TouchableOpacity
              style={[
                styles.quantityButton,
                { borderTopRightRadius: 5, borderBottomRightRadius: 5 },
              ]}
              onPress={() => increaseQuantity(item.index)}
            >
              <Icon name="add" size={20} color="#9098B1" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    borderColor: "#EBF0FF",
    borderWidth: 1,
    marginBottom: 8,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  details: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "space-between",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    width: 146,
  },
  priceQuantity: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  price: {
    fontSize: 16,
    color: Colors.primaryBrand,
    marginTop: 5,
    fontWeight: "bold",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    borderWidth: 1,
    borderColor: "#EBF0FF",
    borderRadius: 5,
    backgroundColor: "#EBF0FF",
  },
  quantityButton: {
    padding: 5,
    backgroundColor: "white",
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 16,
    backgroundColor: "#EBF0FF",
  },
  actions: {
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
  },
  deleteButton: {
    // marginTop: 10,
  },
});

export default CartItem;
