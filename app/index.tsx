import React from "react";
import { Button, ButtonGroup, ButtonText } from "@/components/ui/button";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function MainApp() {
  return (
    <SafeAreaView className="bg-zinc-100 flex-1 p-5">
      <ButtonGroup space="lg">
        <Button
          size="md"
          variant="solid"
          action="primary"
          onPress={() => router.push("/(house-booking)")}
        >
          <ButtonText>House Booking App</ButtonText>
        </Button>
        <Button
          size="md"
          variant="solid"
          action="primary"
          onPress={() => router.push("/(appointment-doctor)")}
        >
          <ButtonText>Appointment Doctor</ButtonText>
        </Button>
        <Button
          size="md"
          variant="solid"
          action="primary"
          onPress={() => router.push("/(online-shop)")}
        >
          <ButtonText>Online Shop</ButtonText>
        </Button>
      </ButtonGroup>
    </SafeAreaView>
  );
}
