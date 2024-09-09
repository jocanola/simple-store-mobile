import { Colors } from "@/constants/Colors";
import React, { FC } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const AppButton: FC<{ title: string; onPress: () => void }> = ({
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primaryBrand,
    paddingVertical: 15,
    alignItems: "center",
    margin: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AppButton;
