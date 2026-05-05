import React from "react";
import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface NavButtonProps {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  isActive: boolean;
  onPress: () => void;
}

export default function NavigationButton({
  title,
  icon,
  isActive,
  onPress,
}: NavButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      className={`flex-1 items-center justify-center py-2 active:opacity-70 transition-opacity`}
    >
      <Ionicons
        name={icon}
        size={24}
        color={isActive ? "#f8fafc" : "#94a3b8"}
      />
      <Text
        className={`text-[10px] mt-1 font-medium ${
          isActive ? "text-slate-50" : "text-slate-400"
        }`}
      >
        {title}
      </Text>
    </Pressable>
  );
}
