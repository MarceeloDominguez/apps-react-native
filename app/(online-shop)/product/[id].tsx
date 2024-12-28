import {
  View,
  ScrollView,
  ImageBackground,
  Image,
  FlatList,
  StyleSheet,
} from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { ITEMS } from "../data/data";
import { ONLINESHOP } from "@/constants/theme";
import { StatusBar } from "expo-status-bar";
import { Heart } from "lucide-react-native";
import { Text } from "@/components/ui/text";
import { STYLE_GLOBAL } from "@/constants/style";
import QuantityKgDetails from "../components/QuantityKgDetails";
import CustomStarRating from "@/components/shared/CustomStarRating";
import CustomSection from "@/components/shared/CustomSection";
import ItemSimilarProduct from "../components/ItemSimilarProduct";
import AddToCart from "../components/AddToCart";

export default function ProductDetails() {
  const { id } = useLocalSearchParams();
  const product = ITEMS.find((item) => item.id === Number(id));

  return (
    <>
      <ScrollView className="bg-[#212121]" showsVerticalScrollIndicator={false}>
        <StatusBar backgroundColor={ONLINESHOP.colors.card} style="light" />
        <Stack.Screen
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: ONLINESHOP.colors.card },
            headerTitle: "Details",
            headerTitleAlign: "center",
            headerTitleStyle: {
              color: "#fff",
              fontSize: 18,
              fontWeight: "bold",
            },
            headerShadowVisible: false,
            headerTintColor: "#fff",
            headerRight: () => <Heart color={"#fff"} />,
          }}
        />
        <View className="mb-14" style={{ transform: [{ translateY: -45 }] }}>
          <ImageBackground
            source={require("@/assets/online-shop/top_grey_background.png")}
            style={{ aspectRatio: 1 }}
          >
            <Image
              source={product?.image}
              className="w-full h-full object-contain"
            />
          </ImageBackground>
          <View
            style={[{ transform: [{ translateY: -20 }] }, STYLE_GLOBAL.shadow]}
            className="bg-[#464445] self-center px-4 h-10 rounded-md justify-center"
          >
            <Text className="text-slate-50 font-bold">
              ${product?.price} / Kg.
            </Text>
          </View>
          <CustomSection title={product?.title!}>
            <View className="mx-4 flex-row justify-between items-center">
              <CustomStarRating
                textRating={`(${product?.star})`}
                rating={product?.star!}
                containerStyle={{ marginTop: 2 }}
              />
              <QuantityKgDetails />
            </View>
          </CustomSection>
          <CustomSection title="Description">
            <Text className="text-slate-300 mx-5">{product?.description}</Text>
          </CustomSection>
          <CustomSection title="Similar Product">
            <FlatList
              data={ITEMS}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.contentContainerStyleSimilarProduct}
              renderItem={({ item }) => (
                <ItemSimilarProduct image={item.image} />
              )}
            />
          </CustomSection>
        </View>
      </ScrollView>
      <AddToCart priceTotal={product?.price} />
    </>
  );
}

const styles = StyleSheet.create({
  contentContainerStyleSimilarProduct: {
    paddingHorizontal: 18,
    gap: 14,
    paddingVertical: 5,
  },
});
