import { View, Text } from "react-native";

export default function Profile() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#323437",
      }}
    >
      <Text style={{ color: "white" }}>Profile Page</Text>
    </View>
  );
}
