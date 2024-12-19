import { View, Pressable, ScrollView, Image, StyleSheet } from "react-native";
import React from "react";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { doctors } from "../data/data";
import { colors } from "@/constants/theme";
import { ChevronLeft, Heart } from "lucide-react-native";
import { StatusBar } from "expo-status-bar";
import DoctorDetailsHeader from "../components/DoctorDetailsHeader";
import DoctorDetailsInfo from "../components/DoctorDetailsInfo";
import DoctorDetailsBiography from "../components/DoctorDetailsBiography";
import DoctorDetailsContact from "../components/DoctorDetailsContact";
import CustomButton from "@/components/shared/CustomButton";

export default function DoctorDetails() {
  const { id } = useLocalSearchParams();
  const doctor = doctors.find((doctor) => doctor.id === Number(id));

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: colors.background,
      }}
      showsVerticalScrollIndicator={false}
    >
      <StatusBar backgroundColor={colors.secondary} />
      <Stack.Screen
        options={{
          headerTitle: "",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: colors.secondary },
          headerBackVisible: false,
          headerTintColor: colors.background,
          headerLeft: () => (
            <Pressable
              className="bg-slate-50/10 p-3 rounded-full"
              onPress={() => router.back()}
            >
              <ChevronLeft color={colors.background} size={18} />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable
              className="bg-slate-50/10 p-3 rounded-full"
              onPress={() => console.log("heart")}
            >
              <Heart color={colors.background} size={18} />
            </Pressable>
          ),
        }}
      />
      <View className="justify-center items-center bg-[#bb99f3]">
        <Image source={doctor?.picture} alt="doctor" style={styles.image} />
      </View>
      <View
        className="bg-[#f8fafc] p-5 rounded-tl-[30px] rounded-tr-[30px]"
        style={{ transform: [{ translateY: -40 }] }}
      >
        <DoctorDetailsHeader
          name={doctor?.name}
          address={doctor?.address}
          special={doctor?.special}
        />
        <DoctorDetailsInfo
          rating={doctor?.rating}
          patients={doctor?.patients}
          experience={doctor?.experience}
        />
        <DoctorDetailsBiography biography={doctor?.biography} />
        <DoctorDetailsContact />
        <CustomButton
          title="Make an Appointment"
          containerStyle={styles.containerStyleButton}
          textStyle={{ color: colors.background }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 310,
    aspectRatio: 1.1,
    resizeMode: "contain",
    transform: [{ translateY: -10 }],
  },
  containerStyleButton: {
    backgroundColor: colors.primary,
    height: 45,
    borderRadius: 45 / 2,
  },
});
