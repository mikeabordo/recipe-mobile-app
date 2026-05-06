import React, { useState } from "react";
import { Text, View, ScrollView, TextInput } from "react-native";
import { globalStyles } from "../../style/global";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";

const CategoryList = ({
  categories,
  onSelectCategory,
  activeCategory,
}: {
  categories: { title: string }[];
  onSelectCategory: (category: string) => void;
  activeCategory: string;
}) => (
  <View className="flex-row gap-2 ">
    {categories.map((category, index) => {
      const isActive = activeCategory === category.title;
      return (
        <View key={index} className="flex items-center">
          <Button
            title={category.title}
            onPress={() => onSelectCategory(category.title)}
            className={isActive ? "bg-teal-600 border-teal-500" : ""}
            textClassName={isActive ? "text-white font-bold" : ""}
          />
        </View>
      );
    })}
  </View>
);

export default function Home() {
  const categories = [
    { title: "All" },
    { title: "Breakfast" },
    { title: "Lunch" },
    { title: "Dinner" },
    { title: "Dessert" },
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const popularRecipes = [
    {
      id: 1,
      title: "Spaghetti carbonara",
      time: "25 min",
      category: "Breakfast",
      rating: "4.5",
      badge: "Italian",
      image: require("../../assets/images/sample-food.jpg"),
    },
    {
      id: 2,
      title: "Meatball sandwich",
      time: "25 min",
      category: "Lunch",
      rating: "4.5",
      badge: "Italian",
      image: require("../../assets/images/sample-food.jpg"),
    },
    {
      id: 3,
      title: "Chicken noodle soup",
      time: "25 min",
      category: "Dinner",
      rating: "4.5",
      badge: "Italian",
      image: require("../../assets/images/sample-food.jpg"),
    },
    {
      id: 4,
      title: "Chocolate lava cake",
      time: "25 min",
      category: "Dessert",
      rating: "4.5",
      badge: "Italian",
      image: require("../../assets/images/sample-food.jpg"),
    },
  ];

  const filteredRecipes =
    activeCategory === "All"
      ? popularRecipes
      : popularRecipes.filter((r) => r.category === activeCategory);

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
        <CategoryList
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
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
            {filteredRecipes.length > 0 ? (
              filteredRecipes.map((recipe) => (
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
                        <Card.StarRating>
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
        </View>
      </View>
    </ScrollView>
  );
}
