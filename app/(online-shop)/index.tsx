import { View, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "@/components/ui/text";

export default function Onboarding() {
  return (
    <ScrollView>
      <SafeAreaView>
        <Text>Onboarding</Text>
      </SafeAreaView>
    </ScrollView>
  );
}
