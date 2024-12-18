import { FlatList } from "react-native";
import React from "react";
import { Bone, Brain, Eye, HeartPulse, Siren } from "lucide-react-native";
import { colors } from "@/constants/theme";
import Speciality from "./Speciality";

const specialty = [
  { icon: <HeartPulse color={colors.primary} size={22} />, name: "Cardiology" },
  { icon: <Eye color={colors.primary} size={22} />, name: "Ophthalmologist" },
  {
    icon: <Brain color={colors.primary} size={22} />,
    name: "neurology",
  },
  {
    icon: <Bone color={colors.primary} size={22} />,
    name: "traumatology",
  },
  {
    icon: <Siren color={colors.primary} size={22} />,
    name: "radiography",
  },
];

export default function MedicalSpecialtiesList() {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={specialty}
      keyExtractor={(_, index) => index.toString()}
      contentContainerStyle={{
        gap: 5,
        marginVertical: 5,
        paddingHorizontal: 10,
      }}
      renderItem={({ item }) => <Speciality speciality={item} />}
    />
  );
}
