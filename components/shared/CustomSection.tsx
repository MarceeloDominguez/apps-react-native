import { TextStyle, View, ViewStyle } from "react-native";
import React from "react";
import { Heading } from "../ui/heading";

type CustomSectionProps = {
  title: string;
  children: React.ReactNode;
  titleStyle?: TextStyle;
  containerStyle?: ViewStyle;
};

export default function CustomSection({
  title,
  children,
  titleStyle,
  containerStyle,
}: CustomSectionProps) {
  return (
    <View style={containerStyle}>
      <Heading
        style={titleStyle}
        size="md"
        className="mx-5 mt-5 mb-1 text-slate-50"
      >
        {title}
      </Heading>
      {children}
    </View>
  );
}
