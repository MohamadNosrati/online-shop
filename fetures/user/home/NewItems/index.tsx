import { ArrowIcon } from "@/components/icons/arrow";
import ProductCard from "@/components/ui/ProductCard";
import frontRoutes from "@/lib/routes/frontRoutes";
import { Href, router } from "expo-router";
import { FlatList, Pressable, Text, View } from "react-native";

const NewItems = () => {
  return (
    <>
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
    </>
  );
};

export default NewItems;
