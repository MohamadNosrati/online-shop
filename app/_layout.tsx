import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import "react-native-reanimated";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { useColorScheme } from "@/hooks/useColorScheme";
import Providers from "@/lib/providers";
import { Platform, SafeAreaView, View } from "react-native";
import cn from "@/lib/tools/cn";

export default function RootLayout() {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "white", // 👈 Set to white
    },
  };
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    RaleWayBold: require("../assets/fonts/Raleway-Bold.ttf"),
    NunitoSnas: require("../assets/fonts/NunitoSans-VariableFont_YTLC,opsz,wdth,wght.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <Providers>
      <SafeAreaView
        className={cn("pb-16 px-5 flex-1", {
          "pt-8": Platform.OS === "android",
        })}
      >
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="index" />
          <Stack.Screen name="signup" />
          <Stack.Screen name="signin" />
          <Stack.Screen name="(user)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </SafeAreaView>
    </Providers>
  );
}
