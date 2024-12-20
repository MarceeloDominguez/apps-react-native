import { View, StyleSheet } from "react-native";
import React from "react";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { Image } from "@/components/ui/image";
import { VStack } from "@/components/ui/vstack";
import CustomBadge from "@/components/shared/CustomBadge";
import { BadgeCheck, Heart } from "lucide-react-native";
import { Heading } from "@/components/ui/heading";
import StartRating from "./StartRating";
import CustomButton from "@/components/shared/CustomButton";
import { colors } from "@/constants/theme";
import { Doctor } from "../data/data";

type DoctorCardItemListProps = {
  doctor: Doctor;
};

export default function DoctorCardItemList({
  doctor,
}: DoctorCardItemListProps) {
  return (
    <Card className="rounded-xl" style={styles.card}>
      <View className="flex-row gap-4">
        <Image
          source={doctor.picture}
          alt="doctor"
          className="bg-violet-200/50 w-28 h-28 rounded-lg object-contain"
        />
        <VStack className="flex-1 justify-between">
          <View>
            <CustomBadge
              title="Professional Doctor"
              icon={<BadgeCheck color={colors.primary} size={14} />}
              iconPosition="left"
            />
            <Heading size="md">{doctor.name}</Heading>
            <Text size="sm">{doctor.special}</Text>
          </View>
          <StartRating rating={doctor.rating} />
        </VStack>
        <View>
          <Heart color={colors.primary} size={20} />
        </View>
      </View>
      <CustomButton
        title="Make an Appointment"
        containerStyle={styles.containerStyleButton}
        textStyle={{ color: colors.primary }}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  containerStyleButton: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: "#ddd5e9",
  },
  card: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 5,
  },
});
