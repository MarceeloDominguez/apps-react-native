import { View, Image, ImageSourcePropType } from "react-native";
import React from "react";
import { STYLE_GLOBAL } from "@/constants/style";

type Props = {
  image: ImageSourcePropType | undefined;
};

export default function ItemSimilarProduct({ image }: Props) {
  return (
    <View>
      <Image
        source={image}
        className="w-20 h-20 bg-[#303030] rounded-md"
        style={STYLE_GLOBAL.shadow}
      />
    </View>
  );
}
