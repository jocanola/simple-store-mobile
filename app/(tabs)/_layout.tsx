import { Tabs } from "expo-router";
import React from "react";

import { Colors } from "@/constants/Colors";

import { Feather, MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { useCart } from "@/store/cartContext";

export default function TabLayout() {
  const { cart } = useCart();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primaryBrand,
        tabBarInactiveTintColor: "#9098B1",
        headerTintColor: "#9098B1",
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          paddingHorizontal: 24,
          paddingVertical: 10,
          height: 93,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Feather name="home" size={25} color={color} />
              <Text style={{ marginTop: 4, color: color }}>Home</Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Feather name="search" size={25} color={color} />
              <Text style={{ marginTop: 4, color: color }}>Explore</Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <View style={{ position: "relative" }}>
                <Feather name="shopping-cart" size={25} color={color} />
                {cart.length > 0 && (
                  <View
                    style={{
                      position: "absolute",
                      top: -5,
                      right: -5,
                      width: 15,
                      height: 15,
                      backgroundColor: Colors.primaryBrand,
                      borderRadius: 7.5,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        textAlign: "center",
                        fontSize: 12,
                        fontWeight: "bold",
                      }}
                    >
                      {cart.length}
                    </Text>
                  </View>
                )}
              </View>

              <Text style={{ marginTop: 4, color: color }}>Cart</Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="offer"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <MaterialIcons name="local-offer" size={24} color={color} />
              {/* <Feather name="shopping-cart" size={25} color={color} /> */}
              <Text style={{ marginTop: 4, color: color }}>Offer</Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Feather name="user" size={25} color={color} />
              <Text style={{ marginTop: 4, color: color }}>Account</Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
