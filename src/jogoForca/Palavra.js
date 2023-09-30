import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Palavra ({
  nomePalavra,
  changeScreen
}) {

  const [palavra, setPalavra] = useState("");

  const handleClick = () =>{
    if(nomePalavra) {
        nomePalavra(palavra)
        changeScreen("Forca")
    }
  }

  return (
    <View style={styles.container}> 
      <Button title="Voltar" onPress={() => changeScreen("Home")} />
      <Text style={styles.text}>Escolha a palavra: {palavra}</Text>
      <TextInput placeholder="Palavra" style={styles.input} value={palavra} onChangeText={setPalavra}/>

      <Button title="Jogar" onPress={handleClick}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#98c1d9',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    gap: 15
  },
  input: {
    width: "70%",
    height: 30,
    borderStyle: "solid",
    borderColor: "black",
    borderRadius: 3,
    borderWidth: 2
  },
  text: {
    fontSize: 20,
  }
});