import { View, ScrollView } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import houseListings from "../data/data";
import { Image } from "@/components/ui/image";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import CategoryRatingInfo from "../components/CategoryRatingInfo";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import Facilities from "../components/Facilities";
import FooterWithActions from "../components/FooterWithActions";

export default function HouseDetails() {
  const { id } = useLocalSearchParams();
  const house = houseListings.find((item) => item.id === id);
  const scrollY = useSharedValue(0);

  const animatedHeaderStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      scrollY.value,
      [0, 100],
      ["transparent", "#f8fafc"]
    );

    return { backgroundColor };
  });

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: "",
          headerTintColor: "#196d7e",
          headerBackground: () => (
            <Animated.View style={[animatedHeaderStyle, { flex: 1 }]} />
          ),
        }}
      />
      <ScrollView
        className="bg-slate-50"
        onScroll={(e) => {
          scrollY.value = e.nativeEvent.contentOffset.y;
        }}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Image
            source={house?.image}
            alt="house-id-image"
            className="w-full h-[350px]"
          />
        </View>
        <View className="p-5">
          <CategoryRatingInfo />
          <View className="mt-3 gap-1">
            <Heading size="2xl" className="text-[#196d7e]">
              ${house?.price.toLocaleString()}
            </Heading>
            <Text className="text-slate-700 font-semibold">{house?.name}</Text>
          </View>
          <Facilities />
          <Text size="lg" className="text-slate-900 font-semibold my-2">
            Description
          </Text>
          <Text className="mb-20">{house?.description}</Text>
        </View>
      </ScrollView>
      <FooterWithActions />
    </>
  );
}
