import { Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { styles } from "./style";
import { router } from "expo-router";

type ProductItemProps = {
  nome: string;
  preco: number;
  imagem: string;
  id: string;
};

export default function ProductItem2({
  nome,
  preco,
  imagem,
  id,
}: ProductItemProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.ProductItem}
        onPress={() =>
          router.push({
            pathname: `/productDetail/[id]`,
            params: { id: id },
          })
        }
      >
        <View>
          <Image source={{ uri: imagem }} style={styles.image} />
          <Text style={styles.title}>{nome}</Text>
          <Text style={styles.price}>{`R$ ${preco}`}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
