import "@/assets/css/global.css";
import { ArrowIcon } from "@/components/icons/arrow";
import { Image } from "expo-image";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function HomeScreen() {
  return (
    <View className="flex-1 pb-16">
      <View className="flex-1"></View>
      <View className="">
        <View className="flex flex-row items-center justify-center">
          <Text>I already have an account</Text>
          <Button buttonColor="#004CFF" className="bg-[#004CFF]">
            <ArrowIcon width={15} height={12} color="white" />
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
