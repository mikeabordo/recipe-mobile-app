import React from "react";
import { Pressable, Text, PressableProps } from "react-native";

interface ButtonProps extends PressableProps {
  title: string;
  className?: string;
  textClassName?: string;
}

export const Button = ({
  title,
  className = "",
  textClassName = "",
  style,
  ...props
}: ButtonProps) => {
  return (
    <Pressable
      style={style}
      className={`bg-slate-600/80 border border-slate-700 py-2.5 px-5 rounded-3xl items-center justify-center active:scale-[0.98] active:bg-slate-700/80 shadow-sm shadow-black/50 transition-all ${className}`}
      {...props}
    >
      <Text
        className={`text-slate-200 text-sm font-medium tracking-wide ${textClassName}`}
      >
        {title}
      </Text>
    </Pressable>
  );
};
