import { View, FlatList } from "react-native";
import React from "react";
import DoctorCard from "./DoctorCard";
import { doctors } from "../data/data";

export default function TopDoctorsList() {
  return (
    <View>
      <FlatList
        data={doctors}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{
          gap: 20,
          paddingHorizontal: 20,
          paddingVertical: 14,
        }}
        renderItem={({ item }) => <DoctorCard doctor={item} />}
      />
    </View>
  );
}
