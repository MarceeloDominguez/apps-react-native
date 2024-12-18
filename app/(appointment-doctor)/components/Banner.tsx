import { View, StyleSheet } from "react-native";
import React from "react";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import CustomButton from "@/components/shared/CustomButton";
import { Input, InputField } from "@/components/ui/input";

export default function Banner() {
  return (
    <View className="bg-[#bb99f3] w-full h-44 rounded-xl mt-6">
      <Image
        source={require("@/assets/appointment-doctor/men.png")}
        alt="men banner"
        className="absolute bottom-0 right-0 w-40 h-40"
      />
      <View className="p-5">
        <Text size="2xl" className="text-slate-50 font-semibold">
          Book and Schedule with {"\n"}the Nearest Doctor
        </Text>
        <CustomButton
          title="Find Nearby"
          containerStyle={styles.containerStyleButton}
          textStyle={{ color: "#f8fafc" }}
        />
      </View>
      <Input
        variant="rounded"
        className="bg-[#ecf2f3] h-12 px-2"
        style={styles.input}
      >
        <InputField placeholder="Searching..." className="text-slate-900" />
      </Input>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyleButton: {
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: "#f07a82",
    width: 130,
    marginTop: 12,
  },
  input: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    position: "absolute",
    right: 0,
    left: 0,
    bottom: -24,
    marginHorizontal: 20,
  },
});
