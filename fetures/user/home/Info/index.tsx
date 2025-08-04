import { ArrowIcon } from "@/components/icons/Arrow";
import { HamburgerIcon } from "@/components/icons/Hamburger";
import { ScreenIcon } from "@/components/icons/Screen";
import { SettingsIcon } from "@/components/icons/Settings";
import UserProfile from "@/components/ui/UserProfile";
import projectColors from "@/lib/config/colors";
import frontRoutes from "@/lib/routes/frontRoutes";
import { Href, router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import profileImage from "@/assets/images/profile.png";


const Info = () => {
  return (
    <>
      <View className="flex-row justify-between items-center w-full bg-red-400">
        <View className="flex items-center flex-row gap-x-2">
          <UserProfile
            containerHeight={48}
            containerWidth={48}
            width={40}
            height={40}
            source={profileImage}
          />
          <Pressable className="py-2 px-4 bg-primary rounded-full">
            <Text className="text-white">My Activity</Text>
          </Pressable>
        </View>
        <View className="flex-row items-center gap-x-2.5">
          <Pressable className="w-9 h-9 bg-secondary rounded-full flex justify-center items-center">
            <ScreenIcon width={17} height={17} />
          </Pressable>
          <Pressable className="w-9 h-9 bg-secondary rounded-full flex justify-center items-center">
            <SettingsIcon
              color={projectColors.primary}
              width={17}
              height={17}
            />
          </Pressable>
          <Pressable className="w-9 h-9 bg-secondary rounded-full flex justify-center items-center">
            <HamburgerIcon width={17} height={17} />
          </Pressable>
        </View>
      </View>
      <View className="mt-5">
        <Text className="font-bold font-raleway text-3xl">Hello, Romina!</Text>
      </View>
      <View className="bg-secondary py-2.5 px-4 rounded-xl gap-y-1 mt-3">
        <Text className="font-raleway font-bold text-sm">Announcement</Text>
        <View className="flex-row items-end justify-between gap-x-7">
          <Text className="font-nunito text-sm text-wrap max-w-80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            hendrerit luctus libero ac vulputate.
          </Text>
          <Pressable
            onPress={() => router.push(frontRoutes.siginin() as Href)}
            className="w-8 h-8 bg-primary flex justify-center items-center rounded-full"
          >
            <ArrowIcon width={15} height={12} color="white" />
          </Pressable>
        </View>
      </View>
    </>
  );
};


export default Info;