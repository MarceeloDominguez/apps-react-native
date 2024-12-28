import { Pressable, Image } from "react-native";
import React from "react";
import { Card } from "@/components/ui/card";
import { STYLE_GLOBAL } from "@/constants/style";
import { Heart } from "lucide-react-native";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { ONLINESHOP } from "@/constants/theme";
import { Item } from "../data/data";
import { Link } from "expo-router";

type ProductItemProps = {
  product: Item;
};

export default function ProductItem({ product }: ProductItemProps) {
  return (
    <Link href={{ pathname: "/product/[id]", params: { id: product.id } }}>
      <Card className="bg-[#303030] rounded-[8px]" style={STYLE_GLOBAL.shadow}>
        <Pressable className="self-end">
          <Heart size={18} color={ONLINESHOP.colors.secondary} />
        </Pressable>
        <Image source={product.image} className="w-40 h-40" />
        <VStack>
          <Heading size="md" className="text-slate-50 line-clamp-1 mb-1">
            {product.title}
          </Heading>
          <Text size="sm" className="text-[#c49a1d] font-bold">
            ${product.price} / kg.
          </Text>
        </VStack>
      </Card>
    </Link>
  );
}
