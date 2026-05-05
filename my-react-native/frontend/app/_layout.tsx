import "../global.css";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#323437ff" },
      }}
    >
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
