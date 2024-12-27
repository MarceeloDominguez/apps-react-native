import { Image, Pressable, View } from "react-native";
import React from "react";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { STYLE_GLOBAL } from "@/constants/style";

export default function Banner() {
  return (
    <View
      className="bg-[#303030] mx-6 mt-3 p-8 rounded-[8px] flex-row gap-2"
      style={STYLE_GLOBAL.shadow}
    >
      <View className="flex-1">
        <Heading size="md" className="text-[#c49a1d] mb-1">
          Up to 40% offer
        </Heading>
        <Text className="text-slate-50 font-semibold" size="sm">
          Enjoy our big offer of {"\n"}every day
        </Text>
        <Pressable className="bg-[#c49a1d] self-start px-3 py-1 rounded-lg mt-5">
          <Text size="sm" className="text-slate-950 font-semibold">
            Shop now
          </Text>
        </Pressable>
      </View>
      <View className="items-center justify-center">
        <Image
          source={require("@/assets/online-shop/basket_banner.png")}
          className="w-28 h-28 object-contain"
        />
      </View>
    </View>
  );
}
