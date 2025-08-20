import { Text, View, Image } from "react-native";
import React from "react";
import { styles } from "./style";

type PromoProps = {
  urlImage: string;
};

export default function Promo({ urlImage }: PromoProps) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: urlImage }} style={styles.image} />
    </View>
  );
}
