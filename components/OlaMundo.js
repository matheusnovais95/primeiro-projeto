import React from "react";
import { Text, View } from "react-native";

class OlaMundo extends React.Component {
  render() {
    return (
      <View>
        <Text style={this.props.styleTwo}>Olá</Text>
        <Text style={this.props.styleOne}>{this.props.nome}</Text>
      </View>
    );
  }
}

export	default	OlaMundo;