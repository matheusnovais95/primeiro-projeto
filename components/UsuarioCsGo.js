import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

class UsuarioCsGo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: "",
      dados: {},
    };

    this.fetchDados = this.fetchDados.bind(this);
  }

  fetchDados() {
    const headers = new Headers({
      "TRN-Api-Key": "9484b607-aca2-400e-8ba1-31b291e07f24",
    });
    const init = {
      headers: headers,
    };

    fetch(
      `https://public-api.tracker.gg/v2/csgo/standard/profile/steam/${this.state.usuario}`,
      init
    )
      .then((response) => response.json())
      .then((json) => this.setState({ dados: json }))
      .catch((err) => this.setState({ dados: err }));
  }

  componentDidMount() {
    this.fetchDados();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.fontResult}>{JSON.stringify(this.state.dados)}</Text>
        <View>
          <TextInput
            placeholder="Pesquise o usuário do github"
            style={styles.input}
            onChangeText={(usuario) => {
              this.setState({ usuario });
            }}
            value={this.state.usuario}
          />
        </View>
        <View>
          <Button
            onPress={this.fetchDados}
            title="Buscar Dados"
            accessibilityLabel="Busque os dados do usuário no GitHub"
          />
        </View>
      </View>
    );
  }
}

export default UsuarioCsGo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  input: {
    marginBottom: 15,
    marginTop: 15,
    height: 30,
    width: 300,
    fontSize: 12,
    borderWidth: 1,
    borderColor: "black",
    color: "#000",
  },
  fontResult: {
    fontSize: 13,
    backgroundColor: "#333",
    padding: 12,
    borderRadius: 5,
    color: "#fff",
  },
});
