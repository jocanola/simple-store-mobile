import { Colors } from "@/constants/Colors";
import React, { FC } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const FlashSaleBanner = () => {
  return (
    <>
      <View style={styles.container}>
        <Image
          source={require("../../../assets/images/Promotion.png")}
          style={styles.image}
        />
        <View style={styles.overlay}>
          <Text style={styles.title}>Super Flash Sale</Text>
          <Text style={styles.subtitle}>50% Off</Text>
          <View style={styles.timer}>
            <TimerBox value="08" />
            <Text style={{ fontSize: 14, color: "white", fontWeight: "bold" }}>
              :
            </Text>
            <TimerBox value="34" />
            <Text style={{ fontSize: 14, color: "white", fontWeight: "bold" }}>
              :
            </Text>
            <TimerBox value="52" />
          </View>
        </View>
      </View>
      {/* carousel indicator */}
      <View style={styles.carouselIndicatorContainer}>
        {new Array(5).fill(0).map((_, index) => (
          <View
            key={`${index}`}
            style={[
              styles.carouselIndicator,
              {
                backgroundColor:
                  index === 2 ? Colors.primaryBrand : Colors.gray,
              },
            ]}
          />
        ))}
      </View>
    </>
  );
};

const TimerBox: FC<{ value: string }> = ({ value }) => (
  <View style={styles.timerBox}>
    <Text style={styles.timerText}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 194,
    borderRadius: 10,
    overflow: "hidden",
  },

  carouselIndicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,
  },
  carouselIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    paddingLeft: 24,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 10,
  },
  timer: {
    flexDirection: "row",
    marginTop: 24,
    alignItems: "center",
  },
  timerBox: {
    height: 38.08,
    justifyContent: "center",
    alignItems: "center",
    width: 38.08,
    backgroundColor: "white",
    padding: 5,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  timerText: {
    color: "black",
    fontWeight: "bold",
  },
});

export default FlashSaleBanner;
