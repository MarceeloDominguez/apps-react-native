import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-slate-50">
      <Text className="text-center">Settings Screen</Text>
    </SafeAreaView>
  );
}
