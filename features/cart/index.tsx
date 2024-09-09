import Header from "@/components/Header/Header";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
  Alert,
} from "react-native";
import CartItem from "./components/CartItem";
import CouponInput from "./components/CouponInput";
import OrderSummary from "./components/OrderSummary";
import { useCart } from "@/store/cartContext";
import { useRouter } from "expo-router";
import AppButton from "@/components/Button/AppButton";

const Cart = () => {
  const router = useRouter();
  const { cart: cartItems, totalPrice, subTotal } = useCart();

  const orderSummary = {
    itemsCount: cartItems.length,
    subTotal: subTotal,
    shipping: 0,
    importCharges: 0,
    total: totalPrice,
  };

  const handleCheckout = () => Alert.alert("Coming Soon");
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Cart" onBackPress={() => router.back()} />
      <ScrollView style={{ paddingHorizontal: 24, paddingVertical: 8 }}>
        <FlatList
          data={cartItems}
          keyExtractor={(item) => `${item.index}`}
          renderItem={({ item, index }) => (
            <CartItem key={item.index} item={item} />
          )}
        />

        <CouponInput />
        <OrderSummary data={orderSummary} />
        <AppButton title="Checkout" onPress={handleCheckout} />
      </ScrollView>
      {/* <CheckoutButton /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Cart;
