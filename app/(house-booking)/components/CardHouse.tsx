import { View } from "react-native";
import React from "react";
import { Card } from "@/components/ui/card";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { Box } from "@/components/ui/box";
import { HStack } from "@/components/ui/hstack";
import { Bath, BedDouble, Heart, MapPin } from "lucide-react-native";
import { Heading } from "@/components/ui/heading";
import { House } from "../data/data";

type CardHouseProps = {
  house: House;
};

export default function CardHouse({ house }: CardHouseProps) {
  return (
    <Card variant="elevated" className="p-0 rounded-2xl">
      <Image
        source={house.image}
        className="mb-6 h-[240px] w-full rounded-2xl"
        alt="image"
      />
      <View className="bg-white/40 w-10 h-10 rounded-xl items-center justify-center absolute right-2 top-2">
        <Heart color="#196d7e" size={18} />
      </View>
      <HStack
        space="md"
        className="absolute bg-slate-900/40 bottom-10 mx-3 px-2 py-1 rounded-xl"
      >
        <Box className="justify-center">
          <View className="w-10 h-10 bg-slate-50 rounded-full justify-center items-center">
            <MapPin color="#4e4545" size={20} />
          </View>
        </Box>
        <Box className="flex-1">
          <Text className="text-sm font-normal mb-1 text-slate-50">
            {house.name}
          </Text>
          <Heading size="md" className="text-slate-50 font-bold">
            ${house.price.toLocaleString()}
          </Heading>
        </Box>
        <Box className="flex-row justify-center items-center gap-1">
          <BedDouble color="#fff" size={14} />
          <Text size="sm" className="text-slate-50">
            {house.bedrooms}
          </Text>
        </Box>
        <Box className="flex-row justify-center items-center gap-1">
          <Bath color="#fff" size={14} />
          <Text size="sm" className="text-slate-50">
            {house.bathrooms}
          </Text>
        </Box>
      </HStack>
    </Card>
  );
}
