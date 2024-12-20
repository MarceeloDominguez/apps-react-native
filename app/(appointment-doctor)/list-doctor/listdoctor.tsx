import { View, FlatList, StyleSheet } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { colors } from "@/constants/theme";
import DoctorCardItemList from "../components/DoctorCardItemList";
import { doctors } from "../data/data";

export default function ListDoctorScreen() {
  return (
    <View>
      <Stack.Screen
        options={{
          headerTitle: "Recommended List",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: colors.background },
        }}
      />
      <FlatList
        data={doctors}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          gap: 16,
          paddingHorizontal: 20,
          paddingVertical: 10,
          backgroundColor: colors.background,
        }}
        renderItem={({ item }) => <DoctorCardItemList doctor={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyleButton: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: "#ddd5e9",
  },
});
