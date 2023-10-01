import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function JogadoresMemoria ({
  jogadoresMemoria,
  changeScreen
}) {
  const [jogador1, setJogador1] = useState("");
  const [jogador2, setJogador2] = useState("");

  const handleClick = () => {
    if (jogadoresMemoria) {
      jogadoresMemoria(jogador1, jogador2);
      changeScreen("JogoMemoria");
    } 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>1° Jogador: {jogador1}</Text>
      <TextInput
        placeholder="Nome"
        style={styles.input}
        value={jogador1}
        onChangeText={setJogador1}
      />
      <Text style={styles.text}>2° Jogador: {jogador2}</Text>
      <TextInput
        placeholder="Nome"
        style={styles.input}
        value={jogador2}
        onChangeText={setJogador2}
      />
      <View style={styles.buttonContainer}>
        <Button title="Jogar" color="#e09f3e" onPress={handleClick} />
        <Button style={styles.buttonContainer} title="Voltar" color="#8b8c89" onPress={() => changeScreen("Home")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEF9EF",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: 10,
    marginTop: 15
  },
  input: {
    width: "50%",
    height: 32,
    borderStyle: "solid",
    borderColor: "black",
    borderRadius: 3,
    borderWidth: 2,
    fontSize: 12,
  },
  text: {
    fontSize: 18 
  },
  buttonContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "center",
    margin: 12,
    gap: 20,
  }
});
