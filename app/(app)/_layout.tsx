import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import "react-native-reanimated";

import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <Stack>
      <StatusBar style="auto" />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="products/[id]" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
