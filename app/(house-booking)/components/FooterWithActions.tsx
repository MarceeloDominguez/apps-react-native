import { View } from "react-native";
import React from "react";
import { MessageSquareMore } from "lucide-react-native";
import { Button, ButtonText } from "@/components/ui/button";

export default function FooterWithActions() {
  return (
    <View className="absolute bottom-0 gap-3 items-center h-20 w-full p-4 flex-row flex-1 flex bg-slate-100">
      <View className="bg-[#ecf2f3] h-10 w-10 items-center justify-center rounded-full">
        <MessageSquareMore color="#196d7e" size={18} />
      </View>
      <Button
        variant="solid"
        action="default"
        className="flex-1 rounded-full bg-[#196d7e]"
      >
        <ButtonText>Request Appoitment</ButtonText>
      </Button>
    </View>
  );
}
