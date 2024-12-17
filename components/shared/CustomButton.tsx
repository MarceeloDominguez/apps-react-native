import {
  Text,
  Pressable,
  ViewStyle,
  TextStyle,
  StyleSheet,
  View,
  PressableProps,
} from "react-native";
import React from "react";

interface CustomButtonProps extends PressableProps {
  title: string;
  icon?: React.ReactNode;
  containerStyle?: ViewStyle;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  iconPosition?: "left" | "right";
}

export default function CustomButton({
  title,
  icon,
  containerStyle,
  buttonStyle,
  textStyle,
  iconPosition,
  ...rest
}: CustomButtonProps) {
  return (
    <Pressable style={[styles.container, containerStyle]} {...rest}>
      <View style={[styles.button, buttonStyle]}>
        {icon && iconPosition === "left" && <View>{icon}</View>}
        <Text style={[styles.buttonTitle, textStyle]}>{title}</Text>
        {icon && iconPosition === "right" && <View>{icon}</View>}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0e7e7",
    height: 45,
    justifyContent: "center",
    borderRadius: 8,
  },
  buttonTitle: {
    color: "#000",
    fontWeight: "700",
    fontSize: 13,
  },
  button: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});
