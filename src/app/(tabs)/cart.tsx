import { Text, View } from "react-native";
import React, { Component } from "react";
import Header from "@//components/header";
import colors from "@//styles/colors";


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
          <Text style={{ color: colors.white }}>Carrinho</Text>
        </View>
      </>
    );
  }
}
