import { Text, View, ScrollView, TextInput } from "react-native";
import { globalStyles } from "../../style/global";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";

export default function Home() {
  const categories = [
    {
      title: "All",
      icon: "",
    },
    {
      title: "Breakfast",
      icon: "",
    },
    {
      title: "Lunch",
      icon: "",
    },
    {
      title: "Dinner",
      icon: "",
    },
    {
      title: "Dessert",
      icon: "",
    },
  ];

  return (
    <ScrollView style={globalStyles.container}>
      <View className="border border-slate-400 px-4 py-2 gap-4 rounded-md bg-slate-900/20">
        <Text style={[globalStyles.title]}>Recipes</Text>
        {/* Search Field */}
        <View className="flex-row items-center border border-gray-500 rounded-xl px-2 py-1.5 focus-within:border-slate-300">
          <Ionicons name="search" size={16} color="#94a3b8" />
          <TextInput
            className="flex-1 ml-2 mb-0.5 text-white outline-none"
            placeholder="Search recipes..."
            placeholderTextColor="#94a3b8"
          />
        </View>
        {/* Separator */}
        <View className="border border-slate-400 h-0.5 w-full" />

        {/* Category List */}
        <View className="flex-row gap-2 ">
          {categories.map((category, index) => (
            <View key={index} className="flex items-center">
              <Button title={category.title} />
            </View>
          ))}
        </View>
        {/* Feature Recipe */}
        <View>
          <Text style={globalStyles.subtitle} className="mb-4">
            Feature today
          </Text>
          <Card.Touchable href="/recipe/1">
            <Card.Image
              source={require("../../assets/images/sample-food.jpg")}
              className="h-56 w-full"
              style={{ width: "100%" }}
              resizeMode="contain"
            />
            <Card.Content>
              <Card.Title>Spaghetti carbonara</Card.Title>
              <Card.Footer>
                <Card.Description>25 min • Lunch</Card.Description>
                <Card.Badge textClassName="text-teal-800">Italian</Card.Badge>
              </Card.Footer>
            </Card.Content>
          </Card.Touchable>
        </View>
        {/* Popular Recipe */}
        <View>
          <Text style={globalStyles.subtitle} className="mb-4">
            Popular Recipe
          </Text>
          <View className="flex-row flex-wrap justify-between">
            <View className="w-[48%] mb-4">
              <Card.Touchable>
                <Card.Image
                  source={require("../../assets/images/sample-food.jpg")}
                  className="h-40 w-full"
                  style={{ width: "100%" }}
                  resizeMode="cover"
                />
                <Card.Content className="p-3">
                  <Card.Title className="text-lg">
                    Spaghetti carbonara
                  </Card.Title>
                  <Card.Footer className="mt-2">
                    <Card.Description>25 min • Lunch</Card.Description>
                    <Card.StarRating>
                      <Ionicons name="star" size={12} color="#f59e0b" />
                      <Text className="text-slate-400 text-xs font-medium">
                        4.5
                      </Text>
                    </Card.StarRating>
                    <Card.Badge
                      textClassName="text-teal-800"
                      className="px-2 py-0.5"
                    >
                      Italian
                    </Card.Badge>
                  </Card.Footer>
                </Card.Content>
              </Card.Touchable>
            </View>
            <View className="w-[48%] mb-4">
              <Card.Touchable>
                <Card.Image
                  source={require("../../assets/images/sample-food.jpg")}
                  className="h-40 w-full"
                  style={{ width: "100%" }}
                  resizeMode="cover"
                />
                <Card.Content className="p-3">
                  <Card.Title className="text-lg">
                    Spaghetti carbonara
                  </Card.Title>
                  <Card.Footer className="mt-2">
                    <Card.Description>25 min • Lunch</Card.Description>
                    <Card.StarRating>
                      <Ionicons name="star" size={12} color="#f59e0b" />
                      <Text className="text-slate-400 text-xs font-medium">
                        4.5
                      </Text>
                    </Card.StarRating>
                    <Card.Badge
                      textClassName="text-teal-800"
                      className="px-2 py-0.5"
                    >
                      Italian
                    </Card.Badge>
                  </Card.Footer>
                </Card.Content>
              </Card.Touchable>
            </View>
            <View className="w-[48%] mb-4">
              <Card.Touchable>
                <Card.Image
                  source={require("../../assets/images/sample-food.jpg")}
                  className="h-40 w-full"
                  style={{ width: "100%" }}
                  resizeMode="cover"
                />
                <Card.Content className="p-3">
                  <Card.Title className="text-lg">
                    Spaghetti carbonara
                  </Card.Title>
                  <Card.Footer className="mt-2">
                    <Card.Description>25 min • Dinner</Card.Description>
                    <Card.StarRating>
                      <Ionicons name="star" size={12} color="#f59e0b" />
                      <Text className="text-slate-400 text-xs font-medium">
                        4.5
                      </Text>
                    </Card.StarRating>
                    <Card.Badge
                      textClassName="text-teal-800"
                      className="px-2 py-0.5"
                    >
                      Italian
                    </Card.Badge>
                  </Card.Footer>
                </Card.Content>
              </Card.Touchable>
            </View>
            <View className="w-[48%] mb-4">
              <Card.Touchable>
                <Card.Image
                  source={require("../../assets/images/sample-food.jpg")}
                  className="h-40 w-full"
                  style={{ width: "100%" }}
                  resizeMode="cover"
                />
                <Card.Content className="p-3">
                  <Card.Title className="text-lg">
                    Spaghetti carbonara
                  </Card.Title>
                  <Card.Footer className="mt-2">
                    <Card.Description>25 min • Dinner</Card.Description>
                    <Card.StarRating>
                      <Ionicons name="star" size={12} color="#f59e0b" />
                      <Text className="text-slate-400 text-xs font-medium">
                        4.5
                      </Text>
                    </Card.StarRating>
                    <Card.Badge
                      textClassName="text-teal-800"
                      className="px-2 py-0.5"
                    >
                      Italian
                    </Card.Badge>
                  </Card.Footer>
                </Card.Content>
              </Card.Touchable>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
