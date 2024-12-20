import { View } from "react-native";
import React from "react";
import { Text } from "@/components/ui/text";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function StartRating({ rating }: { rating: number }) {
  const stars = Array.from({ length: 5 }, (_, index) =>
    index < Math.floor(rating)
      ? "full"
      : index < Math.ceil(rating)
      ? "half"
      : "empty"
  );

  return (
    <View className="flex-row gap-2 self-start items-center">
      {stars.map((star, index) => (
        <Ionicons
          key={index}
          name={
            star === "full"
              ? "star"
              : star === "half"
              ? "star-half"
              : "star-outline"
          }
          size={16}
          color={
            star === "full"
              ? "#f8bc06"
              : star === "half"
              ? "#f8bc06"
              : "#b8aeae"
          }
        />
      ))}
      <Text size="md" className="font-bold ml-2">
        {rating}
      </Text>
    </View>
  );
}
