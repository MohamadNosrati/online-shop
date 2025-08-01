import { BagIcon } from "@/components/icons/Bag";
import { HeartIcon } from "@/components/icons/Heart";
import { HomeIcon } from "@/components/icons/Home";
import { TextIcon } from "@/components/icons/Text";
import { UserIcon } from "@/components/icons/User";
import projectColors from "@/lib/config/colors";
import { Tabs } from "expo-router";
import { View } from "react-native";

const TabsLayout = () => {
  return (
    <View className="pt-7 flex-1 bg-white">
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: projectColors.primary,
          tabBarShowLabel: false,
          headerShadowVisible: false,
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color }) => (
              <HomeIcon width={24} height={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="favorites"
          options={{
            tabBarIcon: ({ color }) => (
              <HeartIcon width={24} height={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="text"
          options={{
            tabBarIcon: ({ color }) => (
              <TextIcon width={24} height={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="bag"
          options={{
            tabBarIcon: ({ color }) => (
              <BagIcon width={24} height={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="dashboard"
          options={{
            tabBarIcon: ({ color }) => (
              <UserIcon width={24} height={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </View>
  );
};

export default TabsLayout;
