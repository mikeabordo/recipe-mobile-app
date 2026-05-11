import { Tabs, useRouter, usePathname } from "expo-router";
import { View } from "react-native";
import NavigationButton from "../../components/Navigation";

export default function TabLayout() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <View style={{ flex: 1, backgroundColor: "#323437ff" }}>
      <View style={{ flex: 1 }}>
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarStyle: { display: "none" },
          }}
        >
          <Tabs.Screen name="index" />
          <Tabs.Screen name="search" />
          <Tabs.Screen name="add" />
          <Tabs.Screen name="favorites" />
          <Tabs.Screen name="profile" />
        </Tabs>
      </View>

      <View className="flex-row items-center justify-center py-4 border-t border-slate-700/50 bg-slate-900/20">
        <NavigationButton
          title="Home"
          icon="home-outline"
          isActive={pathname === "/" || pathname === "/home"}
          onPress={() => router.push("/")}
        />
        <NavigationButton
          title="Search"
          icon="search"
          isActive={pathname === "/search"}
          onPress={() => router.push("/search")}
        />
        <NavigationButton
          title="Add"
          icon="add"
          isActive={pathname === "/add"}
          onPress={() => router.push("/add")}
        />
        <NavigationButton
          title="Favorites"
          icon="heart-outline"
          isActive={pathname === "/favorites"}
          onPress={() => router.push("/favorites")}
        />
        <NavigationButton
          title="Profile"
          icon="person-outline"
          isActive={pathname === "/profile"}
          onPress={() => router.push("/profile")}
        />
      </View>
    </View>
  );
}
