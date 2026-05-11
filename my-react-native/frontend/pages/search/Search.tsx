import { View, Text, ScrollView, TextInput, Pressable } from "react-native";
import { globalStyles } from "../../style/global";
import { Ionicons } from "@expo/vector-icons";
import { Card } from "@/components/Card";
import { HorizontalCard } from "@/components/HorizontalCard";
import { useState } from "react";

const RECIPE_CATEGORIES = {
  ALL: "All",
  BREAKFAST: "Breakfast",
  LUNCH: "Lunch",
  DINNER: "Dinner",
  DESSERT: "Dessert",
};

export default function Search() {
  const popularRecipes = [
    {
      id: 1,
      title: "Spaghetti carbonara",
      time: "25 min",
      category: RECIPE_CATEGORIES.BREAKFAST,
      rating: "4.5",
      badge: "Italian",
      image: require("../../assets/images/sample-food.jpg"),
    },
    {
      id: 2,
      title: "Meatball sandwich",
      time: "25 min",
      category: RECIPE_CATEGORIES.LUNCH,
      rating: "4.5",
      badge: "Italian",
      image: require("../../assets/images/sample-food.jpg"),
    },
    {
      id: 3,
      title: "Chicken noodle soup",
      time: "25 min",
      category: RECIPE_CATEGORIES.DINNER,
      rating: "4.5",
      badge: "Italian",
      image: require("../../assets/images/sample-food.jpg"),
    },
    {
      id: 4,
      title: "Chocolate lava cake",
      time: "25 min",
      category: RECIPE_CATEGORIES.DESSERT,
      rating: "4.5",
      badge: "Italian",
      image: require("../../assets/images/sample-food.jpg"),
    },
  ];

  const trendingFoods = ["Pizza", "Pasta", "Salad", "Soup"];
  const [TrendingFoodsSelected, setTrendingFoodsSelected] = useState<
    string | null
  >(null);

  const trendingTimes = ["20-min meals", "30-min meals"];
  const [TrendingTimeSelected, setTrendingTimeSelected] = useState<
    string | null
  >(null);

  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((fId) => fId !== id) : [...prev, id],
    );
  };

  return (
    <ScrollView style={globalStyles.container}>
      <View className="border border-slate-600 px-4 py-2 gap-4 rounded-md bg-slate-900/20">
        <View>
          <Text style={globalStyles.title}>Find your next favorite recipe</Text>
          <View className="flex-row items-center border border-gray-500 rounded-xl px-2 py-1.5 focus-within:border-slate-300">
            <Ionicons name="search" size={16} color="#94a3b8" />
            <TextInput
              className="flex-1 ml-2 mb-0.5 text-white outline-none"
              placeholder="Search recipes..."
              placeholderTextColor="#94a3b8"
            />
          </View>
        </View>
        <View className="flex-col flex-wrap gap-2">
          <View className="flex-row items-center gap-1">
            <Text style={[globalStyles.subtitle, { fontSize: 16 }]}>
              Trending Searches
            </Text>
          </View>
          <View className="flex-row gap-2 flex-wrap">
            {trendingFoods.map((search) => (
              <Pressable
                key={search}
                className={
                  TrendingFoodsSelected === search
                    ? "border border-red-500 bg-tansparent text-red-500 rounded-full px-4 py-2"
                    : "border border-red-500 bg-gray-100 text-red-500 rounded-full px-4 py-2"
                }
                onPress={() => setTrendingFoodsSelected(search)}
              >
                <View className="flex-row items-center gap-1">
                  <Ionicons name="flame" size={18} color="#e11d48" />
                  <Text
                    style={[
                      globalStyles.subtitle,
                      { fontSize: 16, color: "#e11d48" },
                    ]}
                  >
                    {search}
                  </Text>
                </View>
              </Pressable>
            ))}
          </View>
          <View className="flex-row gap-2 flex-wrap">
            {trendingTimes.map((search) => (
              <Pressable
                key={search}
                className={
                  TrendingTimeSelected === search
                    ? "border border-gray-500 bg-gray-700 text-gray-500 rounded-full px-4 py-2"
                    : "border border-gray-500 bg-transparent text-gray-500 rounded-full px-4 py-2"
                }
                onPress={() => setTrendingTimeSelected(search)}
              >
                <View className="flex-row items-center gap-2 px-2">
                  <Ionicons name="time" size={18} color="#f9fafb" />
                  <Text
                    style={[
                      globalStyles.subtitle,
                      { fontSize: 16, color: "#f9fafb", marginTop: 1 },
                    ]}
                  >
                    {search}
                  </Text>
                </View>
              </Pressable>
            ))}
          </View>
        </View>
        <View className="gap-4 py-4">
          <View className="border-t border-slate-600 -mx-4" />
          <Text style={globalStyles.subtitle}>Explore Recipes</Text>
          <View className="flex-row flex-wrap justify-between">
            {popularRecipes.length > 0 ? (
              popularRecipes.map((recipe) => (
                <View key={recipe.id} className="w-[48%] mb-4">
                  <Card.Touchable>
                    <Card.Image
                      source={recipe.image}
                      className="h-40 w-full"
                      style={{ width: "100%" }}
                      resizeMode="cover"
                    />
                    <Card.Content className="p-3">
                      <Card.Title className="text-lg">
                        {recipe.title}
                      </Card.Title>
                      <Card.Footer className="mt-2">
                        <Card.Description>
                          {recipe.time} • {recipe.category}
                        </Card.Description>
                        <Card.StarRating className="ml-20">
                          <Ionicons name="star" size={12} color="#f59e0b" />
                          <Text className="text-slate-400 text-xs font-medium">
                            {recipe.rating}
                          </Text>
                        </Card.StarRating>
                        <Card.Badge
                          textClassName="text-teal-800"
                          className="px-2 py-0.5"
                        >
                          {recipe.badge}
                        </Card.Badge>
                      </Card.Footer>
                    </Card.Content>
                  </Card.Touchable>
                </View>
              ))
            ) : (
              <Text className="text-slate-400 mt-4 mx-auto">
                No recipes found for this category.
              </Text>
            )}
          </View>
          <View>
            <Text style={globalStyles.subtitle}>You might like</Text>
            <View className="flex flex-col gap-2 py-2">
              {popularRecipes.length > 0 ? (
                popularRecipes.map((recipe) => (
                  <View key={recipe.id}>
                    <HorizontalCard href={`/recipe/${recipe.id}`}>
                      <HorizontalCard.Thumbnail source={recipe.image} />
                      <HorizontalCard.Content>
                        <HorizontalCard.Title>
                          {recipe.title}
                        </HorizontalCard.Title>
                        <HorizontalCard.Meta
                          time={recipe.time}
                          difficulty={recipe.category}
                        />
                        <HorizontalCard.Tags>
                          <HorizontalCard.Tag>
                            {recipe.badge}
                          </HorizontalCard.Tag>
                          <HorizontalCard.Tag>Vegan</HorizontalCard.Tag>
                        </HorizontalCard.Tags>
                      </HorizontalCard.Content>
                      <HorizontalCard.Favorite
                        className="absolute right-2"
                        isFavorite={favoriteIds.includes(recipe.id)}
                        onPress={() => toggleFavorite(recipe.id)}
                      />
                    </HorizontalCard>
                  </View>
                ))
              ) : (
                <Text className="text-slate-400 mt-4 mx-auto">
                  No recipes found for this category.
                </Text>
              )}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
