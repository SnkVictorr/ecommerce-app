import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { styles } from "./style";
import { router } from "expo-router";

type CategoryItemProps = {
  name: string;
};

export default function CategoryItem({ name }: CategoryItemProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.CategoryItem}
        onPress={() => router.push(`/category/index`)}>
      >
        <Text>{name}</Text>
      </TouchableOpacity>
    </View>
  );
}
