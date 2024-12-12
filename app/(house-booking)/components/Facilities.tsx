import { View } from "react-native";
import React from "react";
import { Badge, BadgeText } from "@/components/ui/badge";
import { Text } from "@/components/ui/text";
import { Bath, Bed, Building2, LandPlot, Phone } from "lucide-react-native";

const facilities = [
  { icon: <Bed size={20} color={"#196d7e"} />, name: "3 Bedroon" },
  { icon: <Bath size={20} color={"#196d7e"} />, name: "2 Bathroon" },
  { icon: <Building2 size={20} color={"#196d7e"} />, name: "Card Garage" },
  { icon: <LandPlot size={20} color={"#196d7e"} />, name: "350 m2" },
];

export default function Facilities() {
  return (
    <>
      <View className="flex-row mt-5 mb-2">
        <Text size="lg" className="text-slate-900 font-semibold flex-1 m-0">
          Facilities
        </Text>
        <Badge
          action="info"
          className="items-center justify-center gap-2 rounded-md px-2"
        >
          <Phone color="#196d7e" size={14} />
          <BadgeText className="text-[#196d7e] font-bold capitalize">
            Ask for Virtual Tour
          </BadgeText>
        </Badge>
      </View>
      <View className="flex-row gap-3 py-3">
        {facilities.map((item, i) => (
          <View key={i} className="bg-[#ecf2f3] flex-1 p-2 rounded-lg gap-1">
            <Text>{item.icon}</Text>
            <Text size="sm" className="line-clamp-1 text-slate-900">
              {item.name}
            </Text>
          </View>
        ))}
      </View>
    </>
  );
}
