import { View, Image } from "react-native";
import React from "react";
import { STYLE_GLOBAL } from "@/constants/style";
import { Text } from "@/components/ui/text";
import { Category } from "../data/data";

type CategoryItemProps = {
  category: Category;
};

export default function CategoryItem({ category }: CategoryItemProps) {
  return (
    <View className="max-w-24 items-center justify-center p-2 gap-2">
      <View
        className="p-4 rounded-full bg-[#303030]"
        style={STYLE_GLOBAL.shadow}
      >
        <Image source={category.image} className="w-10 h-10 object-contain" />
      </View>
      <Text size="sm" className="line-clamp-1 text-slate-50 font-bold">
        {category.name}
      </Text>
    </View>
  );
}
