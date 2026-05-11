import "../global.css";
import { Stack } from "expo-router";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import {
  PlayfairDisplay_700Bold,
  PlayfairDisplay_400Regular,
} from "@expo-google-fonts/playfair-display";
import {
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    PlayfairDisplay_700Bold,
    PlayfairDisplay_400Regular,
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#323437ff" },
      }}
    >
      <Stack.Screen name="(tabs)" />
      <Stack.Screen
        name="recipe/[id]"
        options={{
          headerShown: true,
          title: "Recipe Details",
          headerStyle: { backgroundColor: "#323437" },
          headerTintColor: "#f8fafc", // slate-50 text
          headerShadowVisible: false, // removes the border below the header
        }}
      />
    </Stack>
  );
}
