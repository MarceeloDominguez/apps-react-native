import { View } from "react-native";
import React from "react";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

type DoctorDetailsBiographyProps = {
  biography: string | undefined;
};

export default function DoctorDetailsBiography({
  biography,
}: DoctorDetailsBiographyProps) {
  return (
    <View>
      <Heading className="mt-4">Biography</Heading>
      <Text className="mt-2">{biography}</Text>
    </View>
  );
}
