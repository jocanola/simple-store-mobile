import { Colors } from "@/constants/Colors";
import { OrderSummaryProps } from "@/types/types";
import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

const OrderSummary: FC<OrderSummaryProps> = ({ data }) => {
  return (
    <View style={styles.container}>
      <SummaryItem
        label={`Items (${data.itemsCount})`}
        value={`$${data.total.toFixed(2)}`}
      />
      {/* <SummaryItem label="Sub Total" value={`$${data.subTotal.toFixed(2)}`} /> */}
      <SummaryItem label="Shipping" value={`$${data.shipping.toFixed(2)}`} />
      <SummaryItem
        label="Import charges"
        value={`$${data.importCharges.toFixed(2)}`}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total Price</Text>
        <Text style={styles.totalValue}>${data.total.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const SummaryItem: FC<{ label: string; value: string }> = ({
  label,
  value,
}) => (
  <View style={styles.summaryItem}>
    <Text style={styles.summaryLabel}>{label}</Text>
    <Text style={styles.summaryValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 15,
    // marginHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#EBF0FF",
    gap: 10,
  },
  summaryItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  summaryLabel: {
    color: "#9098B1",
    fontWeight: "light",
  },
  summaryValue: {
    fontWeight: "light",
    color: "#223263",
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
  },
  totalLabel: {
    fontSize: 12,
    fontWeight: "bold",
  },
  totalValue: {
    fontSize: 12,
    fontWeight: "bold",
    color: Colors.primaryBrand,
  },
});

export default OrderSummary;
