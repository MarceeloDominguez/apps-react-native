import { View, StyleSheet } from "react-native";
import React from "react";
import { Text } from "@/components/ui/text";
import { Image } from "@/components/ui/image";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { BriefcaseBusiness, Star } from "lucide-react-native";
import { colors } from "@/constants/theme";
import { Doctor } from "../data/data";
import { Link } from "expo-router";

type DoctorCardProps = {
  doctor: Doctor;
};

export default function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <Link href={{ pathname: "/doctor/[id]", params: { id: doctor.id } }}>
      <Card className="p-5 rounded-xl" style={styles.card}>
        <Image
          source={doctor.picture}
          alt="doctor"
          className="w-48 h-48 bg-violet-200/50 rounded-lg"
        />
        <Heading size="md">{doctor.name}</Heading>
        <Text>{doctor.special}</Text>
        <View className="flex-row justify-between mt-3">
          <View className="flex-row gap-1 items-center">
            <Star color="#f8bc06" size={16} />
            <Text className="font-bold">{doctor.rating}</Text>
          </View>
          <View className="flex-row gap-1 items-center">
            <BriefcaseBusiness color={colors.primary} size={16} />
            <Text className="font-bold">{doctor.experience} Years</Text>
          </View>
        </View>
      </Card>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
});
