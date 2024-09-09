import { Colors } from "@/constants/Colors";
import React, { FC } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const SearchBar: FC<{ setSeachParams: (value: string) => void }> = (props) => {
  const { setSeachParams } = props;
  return (
    <View style={styles.container}>
      <Icon
        name="search-outline"
        size={20}
        color={Colors.primaryBrand}
        style={styles.icon}
      />
      <TextInput
        style={styles.input}
        placeholder="Search Product"
        placeholderTextColor="#888"
        onChangeText={(text) => setSeachParams(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    borderColor: Colors.gray,
    borderWidth: 1,
    paddingHorizontal: 10,
    flex: 1,
    height: 46,
    marginRight: 10,
  },
  icon: {
    marginRight: 5,
  },
  input: {
    flex: 1,
    padding: 8,
  },
});

export default SearchBar;
