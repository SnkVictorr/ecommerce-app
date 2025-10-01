import { Text, View, Image, FlatList } from "react-native";
import React from "react";
import { styles } from "./style";
import ProductItem2 from "../productItem";
import colors from "@//styles/colors";
import { ProductService } from "@//models/services/ProductService";
import { Product } from "@//models/types/Product";

// type Product = {
//   id: number;
//   nome: string;
//   preco: number;
//   imagem: string;
// };

// Dados simulados das categorias, "data.ts ou data.json"
// export const products = [
//   {
//     id: 1,
//     nome: "Smartphone Galaxy S21",
//     preco: 799.99,
//     imagem: "https://picsum.photos/200/100",
//   },
//   {
//     id: 2,
//     nome: "Fone de Ouvido Bluetooth",
//     preco: 199.99,
//     imagem: "https://picsum.photos/100/100",
//   },
//   {
//     id: 3,
//     nome: "Smartwatch",
//     preco: 499.99,
//     imagem: "https://picsum.photos/100/100",
//   },
//   {
//     id: 4,
//     nome: "Tablet",
//     preco: 299.99,
//     imagem: "https://picsum.photos/100/100",
//   },
//   {
//     id: 5,
//     nome: "Câmera Digital",
//     preco: 899.99,
//     imagem: "https://picsum.photos/100/100",
//   },
//   {
//     id: 6,
//     nome: "Drone",
//     preco: 1499.99,
//     imagem: "https://picsum.photos/100/100",
//   },
// ];

export default function ProductList() {
  const [data, setData] = React.useState<Product[]>([]);
  const _service = new ProductService();

  React.useEffect(() => {
    // Função assíncrona para buscar os produtos
    async function fetchProducts() {
      _service
        .getAll()
        .then((response) => {
          setData(response);
        })
        .catch((error) => {
          console.error("Erro ao buscar produtos:", error);
        });
    }
    fetchProducts();
  }, []);

  console.log(data);
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
        data={data} // Onde os dados são passados como array na props data
        horizontal // para deixar a lista na posição horizontal
        showsHorizontalScrollIndicator={false} // para esconder a barra de rolagem
        keyExtractor={(item) => item.id_produto.toString()} // para extrair a chave de cada item
        renderItem={({ item }) => (
          <ProductItem2
            nome={item.produto}
            preco={item.preco}
            imagem={item.imagem}
            id={item.id_produto.toString()}
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
