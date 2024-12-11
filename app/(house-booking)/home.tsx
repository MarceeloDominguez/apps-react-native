import { ScrollView } from "react-native";
import React from "react";
import { Heading } from "@/components/ui/heading";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { SearchIcon } from "lucide-react-native";
import ListHouseTypes from "./components/ListHouseTypes";
import Profile from "./components/Profile";
import houseListings from "./data/data";
import CardHouse from "./components/CardHouse";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="bg-slate-50 px-5"
      >
        <StatusBar backgroundColor="#f8fafc" />
        <Profile />
        <Heading size="2xl" className="text-slate-950 my-4">
          Discover Your {"\n"}Dream House Today
        </Heading>
        <Input variant="rounded" className="bg-[#ecf2f3] h-12 px-2">
          <InputSlot className="pl-2">
            <InputIcon as={SearchIcon} />
          </InputSlot>
          <InputField
            placeholder="Search your house or location..."
            className="text-slate-900"
          />
        </Input>
        <ListHouseTypes />
        {houseListings.map((item, index) => (
          <CardHouse house={item} key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
