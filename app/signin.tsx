import { CameraIcon } from "@/components/icons/Camera";
import frontRoutes from "@/lib/routes/frontRoutes";
import { Href, Link, router } from "expo-router";
import { Pressable, Text, TextInput, View } from "react-native";

const Signin = () => {
  return (
    <>
      <View className="flex-1 bg-white justify-center gap-y-8">
        <View className="gap-y-14">
          <View className="w-48">
            <Text className="text-5xl font-bold">Sigin To Account</Text>
          </View>
          <View className="border border-primary border-dashed w-24 h-24 rounded-full justify-center items-center">
            <CameraIcon width={34} height={28} />
          </View>
        </View>
        <View className="gap-y-2">
          <TextInput
            editable={true}
            autoFocus
            keyboardType="email-address"
            inputMode="email"
            placeholder="Email"
            className="w-full bg-secondary h-14 rounded-2xl px-5"
          />
          <TextInput
            editable={true}
            autoFocus
            keyboardType="email-address"
            inputMode="text"
            placeholder="password"
            className="w-full bg-secondary h-14 rounded-2xl px-5"
          />
        </View>
      </View>
      <View className="gap-y-6 items-center bg-white">
        <Pressable
          onPress={() => router.push(frontRoutes.user() as Href)}
          className="w-full bg-primary py-5 rounded-2xl"
        >
          <Text className="text-white text-xl font-nunito text-center ">
            Done
          </Text>
        </Pressable>
        <Link
          className="font-nunito text-secondary text-base"
          href={frontRoutes.start() as Href}
        >
          cancel
        </Link>
      </View>
    </>
  );
};
export default Signin;
