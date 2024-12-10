import { View, Dimensions, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "@/components/ui/image";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button, ButtonText } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import { Facebook, Twitter } from "lucide-react-native";
import { Icon } from "@/components/ui/icon";
import { router } from "expo-router";

const { height: HEIGHT_SCREEN } = Dimensions.get("screen");

export default function Index() {
  return (
    <SafeAreaView className="bg-[#196d7e] flex-1">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ height: HEIGHT_SCREEN <= 890 ? 330 : 570 }}>
          <Image
            source={require("@/assets/house-booking/intro_pic.png")}
            alt="intro-pic"
            className="h-full w-full"
          />
        </View>
        <View className="mt-4 gap-2">
          <Heading size="2xl" className="text-slate-50 text-center">
            Explore Houses That {"\n"} Fit Your Lifestyle
          </Heading>
          <Text size="sm" className="text-slate-300 text-center">
            Finding your Dream home, one key at a {"\n"} time. Your trusted
            partner in every move
          </Text>
        </View>
        <HStack className="flex flex-row px-5 gap-4 my-5">
          <View className="border border-slate-50 h-12 w-12 rounded-full flex items-center justify-center">
            <Icon className="text-slate-50" size="xl" as={Facebook} />
          </View>
          <View className="border border-slate-50 h-12 w-12 rounded-full flex items-center justify-center">
            <Icon className="text-slate-50" size="xl" as={Twitter} />
          </View>
          <Button
            action="secondary"
            className="flex-1 rounded-full h-12"
            onPress={() => router.push("/home")}
          >
            <ButtonText className="text-[#196d7e]">Get Started</ButtonText>
          </Button>
        </HStack>
        <Text size="sm" className="text-slate-300 text-center mb-10">
          Already have an account? Sign In
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
