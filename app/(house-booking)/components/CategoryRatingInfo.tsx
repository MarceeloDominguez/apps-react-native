import { View } from "react-native";
import React from "react";
import { Badge, BadgeText } from "@/components/ui/badge";
import { Star } from "lucide-react-native";

export default function CategoryRatingInfo() {
  return (
    <View className="flex-row justify-between">
      <Badge
        variant="solid"
        action="info"
        className="items-center justify-center rounded-md"
      >
        <BadgeText className="capitalize line-clamp-1 text-[#196d7e]">
          Apartment
        </BadgeText>
      </Badge>
      <Badge
        action="warning"
        className="items-center justify-center gap-2 rounded-md"
      >
        <Star color="#d3c017" size={14} strokeWidth={4} />
        <BadgeText className="text-[#196d7e] font-bold">4.5</BadgeText>
      </Badge>
    </View>
  );
}
