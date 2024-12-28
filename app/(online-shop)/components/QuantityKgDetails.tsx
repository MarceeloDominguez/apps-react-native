import { Text, Pressable } from "react-native";
import React, { useState } from "react";
import { HStack } from "@/components/ui/hstack";
import { ONLINESHOP } from "@/constants/theme";
import { Minus, Plus } from "lucide-react-native";

export default function QuantityKgDetails() {
  const [kilogram, setKilogram] = useState(1);

  return (
    <HStack className="gap-2 items-center">
      <Pressable
        onPress={() => setKilogram(kilogram !== 1 ? kilogram - 1 : 1)}
        className="bg-[#c49a1d] w-8 h-8 items-center justify-center rounded-md"
      >
        <Minus size={18} color={ONLINESHOP.colors.primary} />
      </Pressable>
      <Text className="text-slate-50 font-bold">{kilogram} Kg.</Text>
      <Pressable
        onPress={() => setKilogram(kilogram + 1)}
        className="bg-[#c49a1d] w-8 h-8 items-center justify-center rounded-md"
      >
        <Plus size={18} color={ONLINESHOP.colors.primary} />
      </Pressable>
    </HStack>
  );
}
