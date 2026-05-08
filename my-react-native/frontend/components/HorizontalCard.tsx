import React from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  ViewProps,
  ImageProps,
  TextProps,
  PressableProps,
} from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Fonts } from "../style/global";

// ─── Root ────────────────────────────────────────────────────────────────────

interface HorizontalCardRootProps extends ViewProps {
  children: React.ReactNode;
  className?: string;
}

const HorizontalCardRoot = ({
  children,
  className = "",
  style,
  ...props
}: HorizontalCardRootProps) => {
  return (
    <View
      style={style}
      className={`bg-slate-800/80 border border-slate-700/80 rounded-2xl overflow-hidden shadow-md shadow-black/30 flex-row items-center ${className}`}
      {...props}
    >
      {children}
    </View>
  );
};

// ─── Touchable Root ───────────────────────────────────────────────────────────

interface HorizontalCardTouchableProps extends PressableProps {
  children: React.ReactNode;
  className?: string;
  href?: any;
}

const HorizontalCardTouchable = ({
  children,
  className = "",
  style,
  href,
  onPress,
  ...props
}: HorizontalCardTouchableProps) => {
  const content = (
    <Pressable
      style={style as any}
      className={`bg-slate-800/80 border border-slate-700/80 rounded-2xl overflow-hidden shadow-md shadow-black/30 flex-row items-center active:scale-[0.98] active:bg-slate-700/90 ${className}`}
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

// ─── Thumbnail ────────────────────────────────────────────────────────────────

interface HorizontalCardThumbnailProps extends ImageProps {
  className?: string;
}

const HorizontalCardThumbnail = ({
  className = "",
  style,
  resizeMode = "cover",
  ...props
}: HorizontalCardThumbnailProps) => {
  return (
    <Image
      style={style}
      className={`w-20 h-20 rounded-xl m-3 bg-slate-600 ${className}`}
      resizeMode={resizeMode}
      {...props}
    />
  );
};

// ─── Content ──────────────────────────────────────────────────────────────────

interface HorizontalCardContentProps extends ViewProps {
  className?: string;
}

const HorizontalCardContent = ({
  children,
  className = "",
  style,
  ...props
}: HorizontalCardContentProps) => {
  return (
    <View
      style={style}
      className={`flex-1 py-3 pr-2 gap-y-1 ${className}`}
      {...props}
    >
      {children}
    </View>
  );
};

// ─── Title ────────────────────────────────────────────────────────────────────

interface HorizontalCardTitleProps extends TextProps {
  className?: string;
}

const HorizontalCardTitle = ({
  children,
  className = "",
  style,
  ...props
}: HorizontalCardTitleProps) => {
  return (
    <Text
      style={[{ fontFamily: Fonts.bold }, style]}
      className={`text-slate-100 text-xl tracking-tight ${className}`}
      numberOfLines={1}
      {...props}
    >
      {children}
    </Text>
  );
};

// ─── Meta (time · difficulty) ─────────────────────────────────────────────────

interface HorizontalCardMetaProps extends ViewProps {
  time?: string;
  difficulty?: string;
  className?: string;
}

const HorizontalCardMeta = ({
  time,
  difficulty,
  className = "",
  style,
  ...props
}: HorizontalCardMetaProps) => {
  return (
    <View
      style={style}
      className={`flex-row items-center gap-x-1 ${className}`}
      {...props}
    >
      <Ionicons name="time-outline" size={12} color="#94a3b8" />
      {time && (
        <Text
          style={{ fontFamily: Fonts.body }}
          className="text-slate-400 text-xs"
        >
          {time}
        </Text>
      )}
      {time && difficulty && <Text className="text-slate-500 text-xs">·</Text>}
      {difficulty && (
        <Text
          style={{ fontFamily: Fonts.body }}
          className="text-slate-400 text-xs"
        >
          {difficulty}
        </Text>
      )}
    </View>
  );
};

// ─── Tags Row ─────────────────────────────────────────────────────────────────

interface HorizontalCardTagsProps extends ViewProps {
  className?: string;
}

const HorizontalCardTags = ({
  children,
  className = "",
  style,
  ...props
}: HorizontalCardTagsProps) => {
  return (
    <View
      style={style}
      className={`flex-row flex-wrap gap-1 mt-1 ${className}`}
      {...props}
    >
      {children}
    </View>
  );
};

// ─── Single Tag ───────────────────────────────────────────────────────────────

interface HorizontalCardTagProps extends ViewProps {
  children: React.ReactNode;
  className?: string;
  textClassName?: string;
}

const HorizontalCardTag = ({
  children,
  className = "",
  textClassName = "",
  style,
  ...props
}: HorizontalCardTagProps) => {
  return (
    <View
      style={style}
      className={`bg-teal-400/20 border border-teal-500/30 px-2 py-0.5 rounded-full ${className}`}
      {...props}
    >
      <Text
        style={{ fontFamily: Fonts.semibold }}
        className={`text-teal-300 text-xs font-medium ${textClassName}`}
      >
        {children}
      </Text>
    </View>
  );
};

// ─── Favorite Button ──────────────────────────────────────────────────────────

interface HorizontalCardFavoriteProps {
  isFavorite?: boolean;
  onPress?: (event?: any) => void;
  className?: string;
}

const HorizontalCardFavorite = ({
  isFavorite = false,
  onPress,
  className = "",
}: HorizontalCardFavoriteProps) => {
  return (
    <Pressable
      onPress={(e) => {
        // Prevent event bubbling on Web so the outer card isn't triggered
        e?.stopPropagation?.();
        onPress?.(e);
      }}
      className={`p-3 active:scale-90 z-10 ${className}`}
      hitSlop={8}
    >
      <Ionicons
        name={isFavorite ? "heart" : "heart-outline"}
        size={28}
        color={isFavorite ? "#f43f5e" : "#64748b"}
      />
    </Pressable>
  );
};

// ─── Compound Export ──────────────────────────────────────────────────────────

export const HorizontalCard = Object.assign(HorizontalCardRoot, {
  Touchable: HorizontalCardTouchable,
  Thumbnail: HorizontalCardThumbnail,
  Content: HorizontalCardContent,
  Title: HorizontalCardTitle,
  Meta: HorizontalCardMeta,
  Tags: HorizontalCardTags,
  Tag: HorizontalCardTag,
  Favorite: HorizontalCardFavorite,
});
