import { Pressable, ScrollView, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import HeaderInfo from "../../components/HeaderInfo";
import Banner from "../../components/Banner";
import { Heading } from "@/components/ui/heading";
import MedicalSpecialtiesList from "../../components/MedicalSpecialtiesList";
import { Text } from "@/components/ui/text";
import { colors } from "@/constants/theme";
import TopDoctorsList from "../../components/TopDoctorsList";

export default function HomeScreen() {
  return (
    <ScrollView className="bg-slate-50" showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor="#f8fafc" />
      <SafeAreaView>
        <HeaderInfo />
        <View className="px-5">
          <Banner />
        </View>
        <View className="mt-12">
          <Heading size="md" className="px-5">
            Doctor Speciality
          </Heading>
          <MedicalSpecialtiesList />
          <View className="px-5 flex-row justify-between mt-2">
            <Heading size="md" className="flex-1">
              Top Doctors
            </Heading>
            <Pressable>
              <Text
                size="sm"
                className="font-semibold"
                style={{ color: colors.primary }}
              >
                See all
              </Text>
            </Pressable>
          </View>
          <TopDoctorsList />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
