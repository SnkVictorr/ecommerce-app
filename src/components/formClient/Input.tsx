import { Text, TextInput, View } from "react-native";
import React, { Component } from "react";

interface InputProps {
  InputName: string;
  value: string;
  onChangeText: (text: string) => void;
}

export default class Input extends Component<InputProps> {
  render() {
    return (
      <View
        style={{
          padding: 5,
          borderWidth: 1,
          borderRadius: 40,
          marginBottom: 10,
          boxShadow: "4px 4px 10px grey",
        }}
      >
        <TextInput
          onChangeText={this.props.onChangeText}
          placeholder={this.props.InputName}
          style={{ paddingVertical: 10, paddingHorizontal: 20 }}
        />
      </View>
    );
  }
}
