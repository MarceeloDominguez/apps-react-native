import { View } from "react-native";
import React from "react";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Divider } from "@/components/ui/divider";
import Ionicons from "@expo/vector-icons/Ionicons";

type DoctorDetailsInfoProps = {
  patients: string | undefined;
  experience: number | undefined;
  rating: number | undefined;
};

export default function DoctorDetailsInfo({
  patients,
  experience,
  rating,
}: DoctorDetailsInfoProps) {
  return (
    <HStack className="mt-8 mb-2">
      <VStack className="flex-1">
        <Heading size="sm" className="text-center">
          Patients
        </Heading>
        <Text className="text-center">{patients}</Text>
      </VStack>
      <Divider orientation="vertical" className="mx-2 h-full  bg-[#bb99f3]" />
      <VStack className="flex-1">
        <Heading size="sm" className="text-center">
          Experience
        </Heading>
        <Text className="text-center">{experience} Years</Text>
      </VStack>
      <Divider orientation="vertical" className="mx-2 h-full  bg-[#bb99f3]" />
      <VStack className="flex-1">
        <Heading size="sm" className="text-center">
          Rating
        </Heading>
        <View className="flex-row items-center justify-center gap-1">
          <Ionicons name="star" size={16} color="#f8bc06" />
          <Text>{rating}</Text>
        </View>
      </VStack>
    </HStack>
  );
}
