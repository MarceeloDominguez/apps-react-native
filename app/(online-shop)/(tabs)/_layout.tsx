import React from "react";
import { Tabs } from "expo-router";
import { ONLINESHOP } from "@/constants/theme";
import {
  ClipboardList,
  Heart,
  House,
  ShoppingCart,
  User,
} from "lucide-react-native";

export default function TabNavigation() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: ONLINESHOP.colors.card,
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: ONLINESHOP.colors.secondary,
        tabBarInactiveTintColor: "#8d8888",
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => <House color={color} />,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ color }) => <ShoppingCart color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          tabBarLabel: "Favorite",
          tabBarIcon: ({ color }) => <Heart color={color} />,
        }}
      />
      <Tabs.Screen
        name="myorder"
        options={{
          tabBarLabel: "My Order",
          tabBarIcon: ({ color }) => <ClipboardList color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => <User color={color} />,
        }}
      />
    </Tabs>
  );
}
