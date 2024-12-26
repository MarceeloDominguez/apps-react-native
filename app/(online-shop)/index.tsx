import { View, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "@/components/ui/text";
import { StatusBar } from "expo-status-bar";
import { ONLINESHOP } from "@/constants/theme";
import { Heading } from "@/components/ui/heading";
import CustomButton from "@/components/shared/CustomButton";
import { router } from "expo-router";

export default function Onboarding() {
  return (
    <ScrollView className="bg-[#212121]" showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor={ONLINESHOP.colors.card} style="light" />
      <SafeAreaView>
        <View
          className="flex items-center justify-center bg-[#212121]"
          style={{ transform: [{ translateY: -18 }] }}
        >
          <Image
            source={require("@/assets/online-shop/intro.png")}
            className="w-full h-[500px]"
            style={{ aspectRatio: 0.83 }}
            alt="Online Shop"
          />
        </View>
        <Heading className="text-slate-50 text-center mt-3" size="2xl">
          Let's Find the {"\n"}{" "}
          <Heading size="2xl" className="text-[#c49a1d]">
            Best and Healthiest
          </Heading>{" "}
          Grocery
        </Heading>
        <View className="p-5">
          <Text className="text-center text-slate-50/80 mb-8">
            Welcome to our world of wholesome delights. {"\n"} Explore nature's
            goodness with our vibrant selection of healthy and delicious fruits
          </Text>
          <CustomButton
            title="Get Started"
            containerStyle={{ backgroundColor: ONLINESHOP.colors.secondary }}
            textStyle={{ fontSize: 14 }}
            onPress={() =>
              router.push("/(online-shop)/(tabs)/home" as `${string}:${string}`)
            }
          />
          <Text className="text-center text-slate-50 mt-5 font-semibold">
            Already have an account?{" "}
            <Text className="text-[#c49a1d]"> Sign In</Text>
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
