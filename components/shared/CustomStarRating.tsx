import { TextStyle, View, ViewStyle } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text } from "@/components/ui/text";

type Props = {
  rating: number;
  colorStarFull?: string;
  colorStarHalf?: string;
  colorStarEmpty?: string;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  textRating?: string;
};

export default function CustomStarRating({
  rating,
  colorStarFull = "#f8bc06",
  colorStarHalf = "#f8bc06",
  colorStarEmpty = "#b8aeae",
  containerStyle,
  textStyle,
  textRating,
}: Props) {
  const stars = Array.from({ length: 5 }, (_, index) =>
    index < Math.floor(rating)
      ? "full"
      : index < Math.ceil(rating)
      ? "half"
      : "empty"
  );

  return (
    <View
      className="flex-row gap-2 self-start items-center"
      style={containerStyle}
    >
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
              ? colorStarFull
              : star === "half"
              ? colorStarHalf
              : colorStarEmpty
          }
        />
      ))}
      <Text
        style={textStyle}
        size="md"
        className="font-bold ml-2 text-slate-50"
      >
        {textRating}
      </Text>
    </View>
  );
}
