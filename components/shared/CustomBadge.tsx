import React from "react";
import { Badge, BadgeText } from "../ui/badge";
import { TextStyle, View, ViewStyle } from "react-native";

type CustomBadgeProps = {
  title: string;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
};

export default function CustomBadge({
  title,
  containerStyle,
  titleStyle,
  icon,
  iconPosition,
}: CustomBadgeProps) {
  return (
    <Badge
      style={containerStyle}
      className="bg-violet-200/50 items-center justify-center gap-2 self-start mb-1 rounded-md"
    >
      {icon && iconPosition === "left" && <View>{icon}</View>}
      <BadgeText
        style={titleStyle}
        className="capitalize font-bold text-[#6734a2]"
      >
        {title}
      </BadgeText>
      {icon && iconPosition === "right" && <View>{icon}</View>}
    </Badge>
  );
}
