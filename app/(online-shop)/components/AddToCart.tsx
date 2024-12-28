import React from "react";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import CustomButton from "@/components/shared/CustomButton";
import { ShoppingCart } from "lucide-react-native";
import { ONLINESHOP } from "@/constants/theme";
import { Text } from "@/components/ui/text";
import { StyleSheet } from "react-native";

export default function AddToCart({
  priceTotal,
}: {
  priceTotal: number | undefined;
}) {
  return (
    <HStack className="absolute bottom-0 left-0 right-0 bg-[#303030] p-4 gap-4">
      <VStack className="flex-1">
        <Text size="sm" className="text-slate-50 line-clamp-1">
          Total Price
        </Text>
        <Text className="text-slate-50 font-bold line-clamp-1">
          ${priceTotal}
        </Text>
      </VStack>
      <CustomButton
        title="Add to cart"
        icon={<ShoppingCart color={ONLINESHOP.colors.primary} size={16} />}
        iconPosition="left"
        containerStyle={styles.containerStyleButton}
      />
    </HStack>
  );
}

const styles = StyleSheet.create({
  containerStyleButton: {
    flex: 1,
    backgroundColor: ONLINESHOP.colors.secondary,
  },
});
