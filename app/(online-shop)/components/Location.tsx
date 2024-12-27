import { View } from "react-native";
import React from "react";
import { Text } from "@/components/ui/text";
import { Bell, ChevronDown, MapPin } from "lucide-react-native";
import { ONLINESHOP } from "@/constants/theme";

export default function Location() {
  return (
    <View className="px-6 pt-6 pb-3">
      <Text size="sm" className="text-slate-50">
        Location
      </Text>
      <View className="flex-row gap-2 my-2 items-center">
        <View className="flex-row flex-1 gap-2 items-center">
          <MapPin color={ONLINESHOP.colors.secondary} size={18} />
          <Text className="text-slate-50 font-bold">New York, USA</Text>
          <ChevronDown size={18} color={"#f8fafc"} />
        </View>
        <Bell color={"#f8fafc"} size={18} />
      </View>
    </View>
  );
}
