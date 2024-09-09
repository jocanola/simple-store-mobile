import { Colors } from "@/constants/Colors";
import React, { FC } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface SizeSelectorProps {
  sizes: string[];
  selectedSize: string;
  onSelectSize: (size: string) => void;
}

const SizeSelector: FC<SizeSelectorProps> = ({
  sizes,
  selectedSize,
  onSelectSize,
}) => {
  return (
    <View style={styles.container}>
      {sizes.map((size) => (
        <TouchableOpacity
          key={size}
          style={[
            styles.sizeButton,
            selectedSize === size && styles.selectedSizeButton,
          ]}
          onPress={() => onSelectSize(size)}
        >
          <Text
            style={[
              styles.sizeText,
              selectedSize === size && styles.selectedSizeText,
            ]}
          >
            {size}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sizeButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedSizeButton: {
    borderColor: Colors.primaryBrand,
    backgroundColor: "white",
  },
  sizeText: {
    fontSize: 16,
  },
  selectedSizeText: {
    // color: "#fff",
  },
});

export default SizeSelector;
