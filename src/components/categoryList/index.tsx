import { Text, View, Image, FlatList } from "react-native";
import React from "react";
import { styles } from "./style";
import CategoryItem from "../categoryItem";

// Dados simulados das categorias, "data.ts ou data.json"
const categories = [
  { id: 1, name: "Eletronicos" },
  { id: 2, name: "Roupas" },
  { id: 3, name: "Calçados" },
  { id: 4, name: "Acessórios" },
  { id: 5, name: "Móveis" },
  { id: 6, name: "Brinquedos" },
];

export default function CategoryList() {
  return (
    <View>
      <Text style={styles.title}>Categorias</Text>
      <FlatList
        style={styles.list} // Estilo da lista
        data={categories} // Onde os dados são passados como array na props data
        horizontal // para deixar a lista na posição horizontal
        showsHorizontalScrollIndicator={false} // para esconder a barra de rolagem
        keyExtractor={(item) => item.id.toString()} // para extrair a chave de cada item
        renderItem={({ item }) => <CategoryItem name={item.name} />} // para renderizar cada item da lista
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
