import { View, ScrollView, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Heading } from "@/components/ui/heading";
import CustomButton from "@/components/shared/CustomButton";
import { ChevronRight } from "lucide-react-native";
import { router } from "expo-router";

export default function Onboarding() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor="#9769d3" />
      <SafeAreaView>
        <View className="bg-[#9769d3] h-screen">
          <ImageBackground
            source={require("@/assets/appointment-doctor/white_halo.png")}
            style={{
              aspectRatio: 0.75,
              transform: [{ translateY: -55 }, { translateX: -10 }],
            }}
            resizeMode="contain"
          />
        </View>
        <ImageBackground
          source={require("@/assets/appointment-doctor/intro_women.png")}
          className="w-full absolute bottom-0"
          style={{ aspectRatio: 0.7 }}
        />
        <View className="absolute top-14 mx-5">
          <Heading className="text-[36px] text-slate-50">
            Exceptional Care {"\n"}Close to you
          </Heading>
          <CustomButton
            title="Get Started"
            icon={<ChevronRight color="#fff" size={20} />}
            iconPosition="right"
            containerStyle={styles.containerStyleButton}
            textStyle={{ color: "#fff" }}
            onPress={() => router.push("/(tabs)/home" as `${string}:${string}`)}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerStyleButton: {
    marginTop: 35,
    borderRadius: 45 / 2,
    backgroundColor: "#6734a2",
    width: 160,
  },
});
