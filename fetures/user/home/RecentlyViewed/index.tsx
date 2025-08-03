import profileImage from "@/assets/images/profile.png";
import UserProfile from "@/components/ui/UserProfile";
import { FlatList, Text, View } from "react-native";

const RecentlyViewed = () => {
  return (
    <>
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
    </>
  );
};

export default RecentlyViewed;
