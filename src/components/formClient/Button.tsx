import { View, Button as RNButton } from "react-native";
import React, { Component } from "react";

interface ButtonProps {
  ButtonName: string;
  onPress: () => void;
  ButtonColor: string;
}

export default class Button extends Component<ButtonProps> {
  render() {
    return (
      <View style={{ margin: 5, boxShadow: "4px 4px 10px grey" }}>
        <RNButton
          onPress={this.props.onPress}
          title={this.props.ButtonName}
          color={this.props.ButtonColor}
        />
      </View>
    );
  }
}
