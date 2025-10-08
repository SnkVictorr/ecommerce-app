import { Text, View } from "react-native";
import React, { Component } from "react";

interface TitleProps {
  TitleName: string;
}

// A classe Title esta herdando as propriedades e métodos do Component
export default class Title extends Component<TitleProps> {
  render() {
    return (
      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "400",
            marginBottom: 10,
            marginLeft: 7,
          }}
        >
          {this.props.TitleName}
        </Text>
      </View>
    );
  }
}
