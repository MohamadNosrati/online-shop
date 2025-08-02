import { ScreenIcon } from "@/components/icons/Screen";
import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import profileImage from "@/assets/images/profile.png";
import projectColors from "@/lib/config/colors";
import { SettingsIcon } from "@/components/icons/Settings";
import { HamburgerIcon } from "@/components/icons/Hamburger";
import { ArrowIcon } from "@/components/icons/Arrow";
import { Href, router } from "expo-router";
import frontRoutes from "@/lib/routes/frontRoutes";
import UserProfile from "@/components/ui/UserProfile";
import StoryCard from "@/components/ui/StoryCard";
import ProductCard from "@/components/ui/ProductCard";

const Home = () => {
  return (
    <ScrollView className="bg-white flex-1">
      <View className="flex-row justify-between items-center">
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
      <View className="mt-5">
        <Text className="font-bold font-raleway text-2xl">Recently viewed</Text>
      </View>
      <View className="mt-3">
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ paddingHorizontal: 20 }}
          renderItem={() => (
            <UserProfile
              width={50}
              containerHeight={58}
              containerWidth={58}
              height={50}
              source={profileImage}
            />
          )}
          horizontal={true}
        />
      </View>
      <View className="mt-6">
        <Text className="font-bold font-raleway text-2xl">My Orders</Text>
      </View>
      <View className="flex-row justify-between items-center mt-3 gap-x-1">
        <Pressable className="pt-2 pb-1.5 px-5 bg-primaryLight rounded-full flex-1">
          <Text className="text-primary font-raleway text-base text-center">
            To Pay
          </Text>
        </Pressable>
        <Pressable className="pt-2 pb-1.5 px-5 bg-primaryLight rounded-full flex-1">
          <Text className="text-primary font-raleway text-base text-center">
            To Recieve
          </Text>
        </Pressable>
        <Pressable className="pt-2 pb-1.5 px-5 bg-primaryLight rounded-full flex-1">
          <Text className="text-primary font-raleway text-base text-center">
            To Review
          </Text>
        </Pressable>
      </View>
      <View className="mt-7">
        <Text className="font-bold font-raleway text-2xl">Stories</Text>
      </View>
      <View className="mt-1">
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ paddingHorizontal: 6 }}
          renderItem={() => (
            <StoryCard width={104} height={175} source={profileImage} />
          )}
          horizontal={true}
        />
      </View>
      <View className="flex-row justify-between items-center mt-6">
        <Text className="text-2xl font-bold font-raleway">New Items</Text>
        <View className="flex-row gap-x-3 items-center pr-4">
          <Text className="text-base font-bold font-raleway">See All</Text>
          <Pressable
            onPress={() => router.push(frontRoutes.siginin() as Href)}
            className="w-8 h-8 bg-primary flex justify-center items-center rounded-full"
          >
            <ArrowIcon width={15} height={12} color="white" />
          </Pressable>
        </View>
      </View>
      <View>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ paddingHorizontal: 6 }}
          renderItem={() => <ProductCard />}
          horizontal={true}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
