import { View } from "react-native";
import React, { ReactNode } from "react";
import { Text } from "@/components/ui/text";
import { colors } from "@/constants/theme";

interface Speciality {
  name: string;
  icon: ReactNode;
}

type SpecialityProps = {
  speciality: Speciality;
};

export default function Speciality({ speciality }: SpecialityProps) {
  return (
    <View className="p-3 items-center max-w-28">
      <View className="bg-violet-200/50 w-14 h-14 rounded-full justify-center items-center">
        {speciality.icon}
      </View>
      <Text
        size="sm"
        className="line-clamp-1 my-2 font-bold capitalize"
        style={{ color: colors.primary }}
      >
        {speciality.name}
      </Text>
    </View>
  );
}
