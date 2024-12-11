import { View, FlatList } from "react-native";
import React from "react";
import { Text } from "@/components/ui/text";
import {
  Home,
  Building,
  Tent,
  LandPlot,
  Building2,
  Castle,
} from "lucide-react-native";

const menuIcons = [
  { icon: <Home size={15} color={"#196d7e"} />, name: "Home" },
  { icon: <Building size={15} color={"#196d7e"} />, name: "Apartment" },
  { icon: <Building2 size={15} color={"#196d7e"} />, name: "Office" },
  { icon: <LandPlot size={15} color={"#196d7e"} />, name: "Empty land" },
  { icon: <Castle size={15} color={"#196d7e"} />, name: "Villa" },
  { icon: <Tent size={15} color={"#196d7e"} />, name: "Tents" },
];

export default function ListHouseTypes() {
  return (
    <FlatList
      numColumns={3}
      data={menuIcons}
      keyExtractor={(_, index) => index.toString()}
      columnWrapperStyle={{ gap: 5, marginBottom: 5 }}
      contentContainerStyle={{ marginVertical: 18 }}
      scrollEnabled={false}
      renderItem={({ item }) => (
        <View className="bg-[#ecf2f3] flex-1 rounded-md items-center flex-row justify-start gap-2 px-2 py-3 align-middle">
          {item.icon}
          <Text
            size="sm"
            className="line-clamp-1 text-center text-slate-900 font-semibold"
          >
            {item.name}
          </Text>
        </View>
      )}
    />
  );
}
