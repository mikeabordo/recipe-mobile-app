import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { globalStyles } from "../style/global";

interface RecipeDetail {
  id: string | string[];
  title: string;
  description: string;
  duration: string;
  category: string;
  cuisine: string;
  rating: number;
  servings: number;
  calories: number;
  image: ImageSourcePropType;
  ingredients: string[];
  steps: string[];
}

interface FullDetailsCardProps {
  recipe: RecipeDetail;
}

export default function FullDetailsCard({ recipe }: FullDetailsCardProps) {
  const router = useRouter();

  return (
    <ScrollView
      style={globalStyles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Back Button */}
      <TouchableOpacity
        onPress={() => router.back()}
        className="flex-row items-center gap-2 mb-4"
      >
        <Ionicons name="arrow-back" size={20} color="#94a3b8" />
        <Text className="text-slate-400 text-sm font-medium mb-0.5">Back</Text>
      </TouchableOpacity>

      {/* Hero Image */}
      <View className="rounded-3xl overflow-hidden mb-5 border border-slate-700/80">
        <Image
          source={recipe.image}
          className="w-full h-64"
          resizeMode="cover"
          style={{ width: "100%" }}
        />
      </View>

      {/* Header */}
      <View className="mb-4">
        <View className="flex-row justify-between items-start mb-2">
          <Text style={globalStyles.title} className="flex-1 mr-4">
            {recipe.title}
          </Text>
          {/* Rating Badge */}
          <View className="flex-row items-center gap-1 bg-amber-500/20 border border-amber-500/40 px-3 py-1.5 rounded-full">
            <Ionicons name="star" size={14} color="#f59e0b" />
            <Text className="text-amber-400 text-sm font-bold">
              {recipe.rating}
            </Text>
          </View>
        </View>
        <Text className="text-slate-400 text-sm leading-relaxed">
          {recipe.description}
        </Text>
      </View>

      {/* Quick Stats */}
      <View className="flex-row justify-between mb-6">
        <View className="flex-1 items-center bg-slate-800/80 border border-slate-700/80 rounded-2xl py-3 mx-1">
          <Ionicons name="time-outline" size={20} color="#2dd4bf" />
          <Text className="text-white text-sm font-bold mt-1">
            {recipe.duration}
          </Text>
          <Text className="text-slate-400 text-xs">Duration</Text>
        </View>
        <View className="flex-1 items-center bg-slate-800/80 border border-slate-700/80 rounded-2xl py-3 mx-1">
          <Ionicons name="people-outline" size={20} color="#2dd4bf" />
          <Text className="text-white text-sm font-bold mt-1">
            {recipe.servings}
          </Text>
          <Text className="text-slate-400 text-xs">Servings</Text>
        </View>
        <View className="flex-1 items-center bg-slate-800/80 border border-slate-700/80 rounded-2xl py-3 mx-1">
          <Ionicons name="flame-outline" size={20} color="#2dd4bf" />
          <Text className="text-white text-sm font-bold mt-1">
            {recipe.calories}
          </Text>
          <Text className="text-slate-400 text-xs">Calories</Text>
        </View>
      </View>

      {/* Tags */}
      <View className="flex-row gap-2 mb-6">
        <View className="bg-teal-100/90 px-3 py-1 rounded-full">
          <Text className="text-teal-900 text-xs font-medium">
            {recipe.category}
          </Text>
        </View>
        <View className="bg-indigo-100/90 px-3 py-1 rounded-full">
          <Text className="text-indigo-900 text-xs font-medium">
            {recipe.cuisine}
          </Text>
        </View>
      </View>

      {/* Ingredients */}
      <View className="mb-6">
        <Text style={globalStyles.subtitle} className="mb-3">
          Ingredients
        </Text>
        <View className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 gap-2">
          {recipe.ingredients.map((ingredient, index) => (
            <View key={index} className="flex-row items-center gap-3">
              <View className="w-2 h-2 rounded-full bg-teal-400" />
              <Text className="text-slate-300 text-sm">{ingredient}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Steps */}
      <View className="mb-8">
        <Text style={globalStyles.subtitle} className="mb-3">
          Instructions
        </Text>
        <View className="gap-3">
          {recipe.steps.map((step, index) => (
            <View
              key={index}
              className="flex-row gap-3 bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4"
            >
              <View className="w-7 h-7 rounded-full bg-teal-500/20 border border-teal-500/40 items-center justify-center shrink-0">
                <Text className="text-teal-400 text-xs font-bold">
                  {index + 1}
                </Text>
              </View>
              <Text className="text-slate-300 text-sm leading-relaxed flex-1">
                {step}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
