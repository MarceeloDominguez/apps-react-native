import { View } from "react-native";
import React from "react";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { MapPin } from "lucide-react-native";
import { colors } from "@/constants/theme";

type DoctorDerailsHeaderProps = {
  name: string | undefined;
  special: string | undefined;
  address: string | undefined;
};

export default function DoctorDetailsHeader({
  name,
  special,
  address,
}: DoctorDerailsHeaderProps) {
  return (
    <View>
      <Heading size="xl">{name}</Heading>
      <Text>{special}</Text>
      <View className="flex-row gap-1 items-center mt-3">
        <MapPin color={colors.primary} size={16} />
        <Text className="text-[#6734a2] font-semibold">{address}</Text>
      </View>
    </View>
  );
}
