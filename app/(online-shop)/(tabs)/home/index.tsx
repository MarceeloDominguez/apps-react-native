import { View, ScrollView, StyleSheet, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { ONLINESHOP } from "@/constants/theme";
import Location from "../../components/Location";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { SearchIcon, SlidersHorizontal } from "lucide-react-native";
import Banner from "../../components/Banner";
import CustomSection from "@/components/shared/CustomSection";
import { CATEGORY, ITEMS } from "../../data/data";
import CategoryItem from "../../components/CategoryItem";
import ProductItem from "../../components/ProductItem";

export default function HomeScreen() {
  return (
    <ScrollView className="bg-[#212121]" showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor={ONLINESHOP.colors.primary} style="light" />
      <SafeAreaView className="pb-6">
        <Location />
        <View className="flex-row mx-6 gap-3">
          <Input style={styles.input}>
            <InputSlot className="pl-3">
              <InputIcon as={SearchIcon} stroke={ONLINESHOP.colors.secondary} />
            </InputSlot>
            <InputField
              placeholder="Search Food, Drinks..."
              className="text-slate-900"
            />
          </Input>
          <View className="bg-[#c49a1d] w-12 items-center justify-center rounded-[8px]">
            <SlidersHorizontal color={ONLINESHOP.colors.primary} />
          </View>
        </View>
        <Banner />
        <CustomSection title="Category">
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={CATEGORY}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ gap: 12, paddingHorizontal: 10 }}
            renderItem={({ item }) => <CategoryItem category={item} />}
          />
        </CustomSection>
        <CustomSection title="Best Deal">
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={ITEMS}
            contentContainerStyle={styles.contentContainerProducts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <ProductItem product={item} />}
          />
        </CustomSection>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: ONLINESHOP.colors.card,
    borderWidth: 0,
    height: 40,
    borderRadius: 8,
    flex: 1,
  },
  contentContainerProducts: {
    gap: 12,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
