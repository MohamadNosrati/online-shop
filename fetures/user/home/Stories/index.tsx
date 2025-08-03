import StoryCard from "@/components/ui/StoryCard";
import { FlatList, Text, View } from "react-native";
import profileImage from "@/assets/images/profile.png";
const Stories = () => {
  return (
    <>
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
    </>
  );
};

export default Stories;
