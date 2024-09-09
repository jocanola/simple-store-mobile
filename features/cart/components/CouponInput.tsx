import { Colors } from "@/constants/Colors";
import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

const CouponInput = () => {
  const [coupon, setCoupon] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Coupon Code"
        value={coupon}
        onChangeText={setCoupon}
      />
      <TouchableOpacity style={styles.applyButton}>
        <Text style={styles.applyButtonText}>Apply</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginVertical: 10,
    // marginHorizontal: 10,
    borderRadius: 5,
    height: 45,
  },
  input: {
    flex: 1,
    padding: 10,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderWidth: 1,
    borderColor: "#EBF0FF",
  },
  applyButton: {
    backgroundColor: Colors.primaryBrand,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    // marginLeft: 10,
    // borderRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  applyButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default CouponInput;
