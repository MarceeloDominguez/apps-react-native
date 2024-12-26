import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { ONLINESHOP } from "@/constants/theme";

export default function HomeScreen() {
  return (
    <ScrollView className="bg-[#212121]">
      <StatusBar backgroundColor={ONLINESHOP.colors.primary} style="light" />
      <SafeAreaView>
        <Text>Hola Home Screen</Text>
      </SafeAreaView>
    </ScrollView>
  );
}
