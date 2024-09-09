import { Colors } from "@/constants/Colors";
import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const RatingStars: FC<{ rating: number }> = ({ rating }) => {
  return (
    <View style={styles.container}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Icon
          key={star}
          name={star <= rating ? "star" : "star-outline"}
          size={20}
          color={Colors.primaryBrand}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 5,
  },
});

export default RatingStars;
