import { Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { styles } from "./style";
import { router } from "expo-router";

type ProductItemProps = {
  nome: string;
  preco: number;
  image: string;
  id: string;
};

export default function ProductItem({
  nome,
  preco,
  image,
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
          <Image
            source={{
              uri: image,
              headers: {
                Authorization:
                  "stNOJvYxgbX3bRg3CEGMTNiqnIO3TMMHPi8K3ehLzk3KqcN3tJbDnBdMwWvAj84r2fiKvaAxQC58i1BsR5iqjBzzscwMudNv8xL6",
              },
            }}
            style={styles.image}
          />
          <Text style={styles.title}>{nome}</Text>
          <Text style={styles.price}>{`R$ ${preco}`}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
