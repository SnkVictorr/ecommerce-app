import { ScrollView, Text, View } from "react-native";
import React from "react";

import Header from "@//components/header";
import colors from "@//styles/colors";
import Title from "@//components/title";
import { styles } from "@//components/title/style";
import Promo from "@//components/promo";
import CategoryList from "@//components/categoryList";
import ProductList from "@//components/productList";
import ProductList2 from "@//components/productList2";

export default function index() {
  {
    return (
      <>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.gray[800],
          }}
        >
          <ScrollView>
            <Title word="Título" />
            <Promo urlImage="https://picsum.photos/200/300" />
            <CategoryList />
            <ProductList />
            <ProductList2 />
          </ScrollView>
        </View>
      </>
    );
  }
}
