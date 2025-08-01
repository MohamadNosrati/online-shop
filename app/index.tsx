import "@/assets/css/global.css";
import { ArrowIcon } from "@/components/icons/Arrow";
import { Image } from "expo-image";
import { Pressable, Text, View } from "react-native";

import bagImage from "@/assets/images/bag.png";
import { Href, router } from "expo-router";
import frontRoutes from "@/lib/routes/frontRoutes";

const HomeScreen = () => {
  return (
    <>
      <View className="flex-1 items-center justify-center gap-y-6 bg-white">
        <View className="w-40 h-40 rounded-full flex items-center justify-center shadow-2xl bg-white">
          <Image
            style={{
              width: 80,
              height: 92,
              objectFit: "contain",
            }}
            source={bagImage}
          />
        </View>
        <View>
          <Text className="font-raleway text-5xl font-bold">Shoppe</Text>
        </View>
        <View className="px-16">
          <Text className="text-center text-lg">
            Beautiful eCommerce UI Kit for your online store
          </Text>
        </View>
      </View>
      <View className="gap-y-5 bg-white">
        <View>
          <Pressable onPress={()=>router.push(frontRoutes.signup() as Href)} className="w-full bg-primary py-5 rounded-2xl">
            <Text className="text-white text-xl font-nunito text-center ">
              Let's get started
            </Text>
          </Pressable>
        </View>
        <View className="flex flex-row items-center justify-center gap-x-4 ">
          <Text className="text-base">I already have an account</Text>
          <Pressable onPress={()=>router.push(frontRoutes.siginin() as Href)} className="w-8 h-8 bg-primary flex justify-center items-center rounded-full">
            <ArrowIcon width={15} height={12} color="white" />
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default HomeScreen;
