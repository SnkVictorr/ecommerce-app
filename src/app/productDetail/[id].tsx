import { Text, View } from "react-native";
import React, { Component } from "react";
import { useLocalSearchParams } from "expo-router";
import { products } from "@//components/productList";
import { Image } from "react-native";
import { styles } from "./style";

export default function ProductDetail() {
  const { id } = useLocalSearchParams();
  const product = products.find((p) => p.id.toString() === id);
  return (
    <View style={styles.container}>
      {product ? (
        <>
          <Image source={{ uri: product.imagem }} style={styles.image} />

          <Text style={styles.title}>{product.nome}</Text>
          <Text style={styles.price}>R$ {product.preco.toFixed(2)}</Text>
        </>
      ) : (
        <Text>Product not found</Text>
      )}
    </View>
  );
}
