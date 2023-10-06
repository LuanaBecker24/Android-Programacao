import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Palavra ({
  nomePalavra,
  changeScreen
}) {

  const [palavra, setPalavra] = useState("");

  const handleClick = () =>{
    if (!palavra || !/^[a-zA-Z]+$/.test(palavra)) {
      return <Text style={styles.errorMessage}>Palavra inválida</Text>;
    }
    if(nomePalavra ) {
        nomePalavra(palavra)
        changeScreen("Forca")
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Palavra escolhida: {palavra}</Text>
      <TextInput placeholder="Palavra" style={styles.input} value={palavra} onChangeText={setPalavra}/>
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
  }
});