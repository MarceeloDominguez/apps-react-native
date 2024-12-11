import { View } from "react-native";
import React from "react";
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";
import { Text } from "@/components/ui/text";

export default function Profile() {
  return (
    <View className="flex-row gap-4 items-center mt-5">
      <Avatar size="md">
        <AvatarFallbackText>Jane Doe</AvatarFallbackText>
        <AvatarImage
          source={require("@/assets/house-booking/profile_picture.png")}
        />
        <AvatarBadge className="bg-[#196d7e]" />
      </Avatar>
      <Text size="lg" className="text-slate-700 font-semibold">
        Hi, Jane
      </Text>
    </View>
  );
}
