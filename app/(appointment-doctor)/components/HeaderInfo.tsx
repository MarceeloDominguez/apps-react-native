import { View } from "react-native";
import React from "react";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Bell } from "lucide-react-native";

export default function HeaderInfo() {
  return (
    <View className="flex-row items-center px-5 pt-5">
      <View className="flex-1">
        <Heading>Hi, Michel Jamal</Heading>
        <Text>How are you today?</Text>
      </View>
      <View className="bg-violet-200/50 w-10 h-10 rounded-full items-center justify-center">
        <Bell color="#1a1919" size={20} />
      </View>
    </View>
  );
}
