import { ScreenIcon } from "@/components/icons/Screen";
import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import projectColors from "@/lib/config/colors";
import { SettingsIcon } from "@/components/icons/Settings";
import { HamburgerIcon } from "@/components/icons/Hamburger";
import { ArrowIcon } from "@/components/icons/Arrow";
import { Href, router } from "expo-router";
import frontRoutes from "@/lib/routes/frontRoutes";
import UserProfile from "@/components/ui/UserProfile";
import StoryCard from "@/components/ui/StoryCard";
import ProductCard from "@/components/ui/ProductCard";
import NewItems from "@/fetures/user/home/NewItems";
import Stories from "@/fetures/user/home/Stories";
import MyOrders from "@/fetures/user/home/MyOrders";
import RecentlyViewed from "@/fetures/user/home/RecentlyViewed";

const Home = () => {
  return (
    <ScrollView className="bg-white flex-1">

      <RecentlyViewed/>
      <MyOrders/>
      <Stories/>
      <NewItems/>
    </ScrollView>
  );
};

export default Home;
