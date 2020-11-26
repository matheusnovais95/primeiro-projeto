import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  FlatList,
  Image
} from "react-native";

class UsuarioCsGo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: "",
      dados: {},
      stats: {}
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
      .then((res) => this.setState({ dados: res.data.platformInfo }))    
      .catch((err) => this.setState({ dados: err }));
  }

  componentDidMount() {
    this.fetchDados();
  }

  render() {
    const info = this.state.dados;
    const stats = this.state.stats;

    return (
      <View style={styles.container}>
        <View style={styles.containerText}>
          <ScrollView>     
            <Image style={styles.image} source={{uri: info.avatarUrl}}/>      
            <Text style={styles.fontResult}>
              {info.platformUserHandle}
            </Text>
          </ScrollView>
        </View>
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
            color="#ff7f00"
            onPress={this.fetchDados}
            title="Buscar JOGADOR"
            accessibilityLabel="Busque os dados do jogador de CS:GO"
          />
        </View>
      </View>
    );
  }
}

export default UsuarioCsGo;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  containerText: {
    width: 300,
    flex: 1,    
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 5,
  },
  input: {
    marginBottom: 15,
    marginTop: 15,
    padding: 10,
    height: 45,
    width: 300,
    fontSize: 12,
    color: "#fff",
    backgroundColor: "#333",
    borderRadius: 5,
  },
  fontResult: {
    fontSize: 20,
    color: "#fff",
    textAlign: 'center'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50
  }
});
