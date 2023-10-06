import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Palavra({
  nomePalavra,
  changeScreen
}) {

  const [palavra, setPalavra] = useState("");
  const [error, setError] = useState("");

  const handleClick = () => {
    if (nomePalavra) {
      if (!palavra || !/^[a-zA-Z]+$/.test(palavra)) {
        setError("Por favor, preencha uma palavra válida.");
      } else {
        setError("");
        nomePalavra(palavra);
        changeScreen("Forca");
      }
    }
  }
  return (
    <View style={styles.container}>
    <Text style={styles.text}>Palavra escolhida: {palavra}</Text>
      <TextInput placeholder="Palavra" style={styles.input} value={palavra} onChangeText={setPalavra} />
      <View style={styles.buttonContainer}>
        <Button title="Jogar" color="#e09f3e" onPress={handleClick} />
        <Button style={styles.buttonContainer} title="Voltar" color="#8b8c89" onPress={() => changeScreen("Home")} />
      </View>

      {error && <Text style={styles.error}>{error}</Text>}

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
    padding: 5
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
  },
  error: {
    color: "red",
    fontSize: 14,
    marginTop: 10,
  }
});