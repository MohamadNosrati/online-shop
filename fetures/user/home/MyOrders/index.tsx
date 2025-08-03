import { Pressable, Text, View } from "react-native";

const MyOrders = () => {
  return (
    <>
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
    </>
  );
};

export default MyOrders;
