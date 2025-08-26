import { Text, View, Image, FlatList } from "react-native";
import React from "react";
import { styles } from "./style";
import ProductItem2 from "../productItem2";

import { products } from "../productList";

// Dados simulados das categorias, "data.ts ou data.json"

export default function ProductList2() {
  return (
    <View>
      <Text
        style={{
          padding: 20,
          textAlign: "left",

          fontSize: 24,
          color: "white",
        }}
      >
        Produtos
      </Text>
      <FlatList
        style={styles.list} // Estilo da lista
        data={products} // Onde os dados são passados como array na props data
        showsHorizontalScrollIndicator={false} // para esconder a barra de rolagem
        keyExtractor={(item) => item.id.toString()} // para extrair a chave de cada item
        renderItem={({ item }) => (
          <ProductItem2
            nome={item.nome}
            preco={item.preco}
            imagem={item.imagem}
            id={item.id.toString()}
          />
        )} // para renderizar cada item da lista
      />
    </View>
  );
}

// type PromoProps = {
//   urlImage: string;
// };

// export default function Promo({ urlImage }: PromoProps) {
//   return (
//     <View style={styles.container}>
//       <Image source={{ uri: urlImage }} style={styles.image} />
//     </View>
//   );
// }
