import React from "react";
import { Stack } from "expo-router";
import { FavoritesProvider } from "./context/FavoritesContext";

export default function RootLayout() {
  return (
    <FavoritesProvider>
      <Stack screenOptions={{ animation: "fade" }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </FavoritesProvider>
  );
}
