import { FlatList, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFavorites } from "../../context/FavoritesContext";
import DoctorCardItemList from "../../components/DoctorCardItemList";
import { Text } from "@/components/ui/text";

export default function WishList() {
  const { favorites } = useFavorites();

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text size="2xl" className="text-center font-bold mt-4">
            There are no doctors
          </Text>
        )}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={({ item }) => (
          <DoctorCardItemList doctor={item} showButton={false} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    gap: 16,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
