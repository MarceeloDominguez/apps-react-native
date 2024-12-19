import { View, FlatList } from "react-native";
import React from "react";
import { Text } from "@/components/ui/text";
import {
  Earth,
  Locate,
  MessageCircleMore,
  PhoneCall,
  Share2,
} from "lucide-react-native";
import { colors } from "@/constants/theme";

const CONTACT = [
  { icon: <Earth color={colors.primary} />, name: "Website" },
  { icon: <MessageCircleMore color={colors.primary} />, name: "Message" },
  { icon: <PhoneCall color={colors.primary} />, name: "Call" },
  { icon: <Locate color={colors.primary} />, name: "Direction" },
  { icon: <Share2 color={colors.primary} />, name: "Share" },
];

export default function DoctorDetailsContact() {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        gap: 10,
        paddingRight: 10,
        marginVertical: 20,
      }}
      data={CONTACT}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => (
        <View className="max-w-28 p-2 justify-center items-center">
          <View className="bg-violet-200/50 w-14 h-14 rounded-full items-center justify-center">
            {item.icon}
          </View>
          <Text className="line-clamp-1 font-bold mt-1">{item.name}</Text>
        </View>
      )}
    />
  );
}
