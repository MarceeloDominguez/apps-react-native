import React from "react";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ animation: "fade" }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen name="house/[id]" />
    </Stack>
  );
}
