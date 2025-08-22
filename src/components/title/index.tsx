import { Text, View } from "react-native";
import React from "react";
import { styles } from "./style";

type TitleProps = {
  word: string;
};

export default function Title({ word }: TitleProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{word}</Text>
    </View>
  );
}
