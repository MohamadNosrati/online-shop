import { HamburgerIcon } from "@/components/icons/Hamburger";
import { ScreenIcon } from "@/components/icons/Screen";
import { SettingsIcon } from "@/components/icons/Settings";
import { Image } from "expo-image";
import { Pressable, Text, View } from "react-native";
import profileImage from "@/assets/images/profile.png";
import { Badge } from "react-native-paper";

const Home = () => {
  return (
    <View className="bg-white flex-1">
      <View className="flex-row justify-between items-center">
        <View className="flex items-center gap-x-2">
            <View className="h-12 w-12 rounded-full">
                <Image source={profileImage}/>
            </View>
            <Badge className={"bg-primary"}>My Activity</Badge>
        </View>
        <View className="flex-row items-center gap-x-2.5">
          <Pressable className="w-9 h-9 bg-secondary rounded-full flex justify-center items-center">
            <ScreenIcon width={17} height={17} />
          </Pressable>
          <Pressable className="w-9 h-9 bg-secondary rounded-full flex justify-center items-center">
            <SettingsIcon width={17} height={17} />
          </Pressable>
          <Pressable className="w-9 h-9 bg-secondary rounded-full flex justify-center items-center">
            <HamburgerIcon width={17} height={17} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Home;
