import React from "react";
import {
  View,
  Text,
  ViewProps,
  Image,
  ImageProps,
  TextProps,
  Pressable,
  PressableProps,
} from "react-native";
import { Link } from "expo-router";
import { Fonts } from "../style/global";

interface CardProps extends ViewProps {
  children: React.ReactNode;
  className?: string;
}

const CardRoot = ({ children, className = "", style, ...props }: CardProps) => {
  return (
    <View
      style={style}
      className={`bg-slate-800/80 border border-slate-700/80 rounded-3xl overflow-hidden shadow-lg shadow-black/40 ${className}`}
      {...props}
    >
      {children}
    </View>
  );
};

interface TouchableCardProps extends PressableProps {
  children: React.ReactNode;
  className?: string;
  href?: any;
}

const TouchableCardRoot = ({
  children,
  className = "",
  style,
  href,
  onPress,
  ...props
}: TouchableCardProps) => {
  const content = (
    <Pressable
      style={style as any}
      className={`bg-slate-800/80 border border-slate-700/80 rounded-3xl overflow-hidden shadow-lg shadow-black/40 active:scale-[0.98] active:bg-slate-700/90 transition-all ${className}`}
      onPress={onPress}
      {...props}
    >
      {children}
    </Pressable>
  );

  if (href) {
    return (
      <Link href={href} asChild>
        {content}
      </Link>
    );
  }

  return content;
};

interface CardImageProps extends ImageProps {
  className?: string;
}

const CardImage = ({
  className = "",
  style,
  resizeMode = "cover",
  ...props
}: CardImageProps) => {
  return (
    <Image
      style={style}
      className={`w-full h-48 bg-slate-300 ${className}`}
      resizeMode={resizeMode}
      {...props}
    />
  );
};

interface CardContentProps extends ViewProps {
  className?: string;
}

const CardContent = ({
  children,
  className = "",
  style,
  ...props
}: CardContentProps) => {
  return (
    <View style={style} className={`p-4 ${className}`} {...props}>
      {children}
    </View>
  );
};

interface CardTitleProps extends TextProps {
  className?: string;
}

const CardTitle = ({
  children,
  className = "",
  style,
  ...props
}: CardTitleProps) => {
  return (
    <Text
      style={[{ fontFamily: Fonts.semibold }, style]}
      className={`text-slate-100 text-xl tracking-tight mb-1 ${className}`}
      {...props}
    >
      {children}
    </Text>
  );
};

interface CardDescriptionProps extends TextProps {
  className?: string;
}

const CardDescription = ({
  children,
  className = "",
  style,
  ...props
}: CardDescriptionProps) => {
  return (
    <Text
      style={[{ fontFamily: Fonts.body }, style]}
      className={`text-slate-400 text-sm leading-relaxed ${className}`}
      {...props}
    >
      {children}
    </Text>
  );
};

interface CardFooterProps extends ViewProps {
  className?: string;
}

const CardFooter = ({
  children,
  className = "",
  style,
  ...props
}: CardFooterProps) => {
  return (
    <View
      style={style}
      className={`flex-row justify-between items-center mt-3 ${className}`}
      {...props}
    >
      {children}
    </View>
  );
};

interface CardBadgeProps extends ViewProps {
  className?: string;
  textClassName?: string;
  children: React.ReactNode;
}

const CardBadge = ({
  children,
  className = "",
  textClassName = "",
  style,
  ...props
}: CardBadgeProps) => {
  return (
    <View
      style={style}
      className={`bg-teal-100/90 px-3 py-1 rounded-full ${className}`}
      {...props}
    >
      <Text
        style={{ fontFamily: Fonts.bold }}
        className={`text-teal-900 text-xs font-medium ${textClassName}`}
      >
        {children}
      </Text>
    </View>
  );
};

interface CardStarRatingProps extends ViewProps {
  className?: string;
}

const CardStarRating = ({
  children,
  className = "",
  style,
  ...props
}: CardStarRatingProps) => {
  return (
    <View
      style={style}
      className={`flex-row justify-between items-center  ${className}`}
      {...props}
    >
      {children}
    </View>
  );
};

// Use a compound component pattern for maximum reusability
export const Card = Object.assign(CardRoot, {
  Touchable: TouchableCardRoot,
  Image: CardImage,
  Content: CardContent,
  Title: CardTitle,
  Description: CardDescription,
  Footer: CardFooter,
  Badge: CardBadge,
  StarRating: CardStarRating,
});
