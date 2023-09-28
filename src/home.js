import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function Home ({
  mudarTelaJogadores,
  changeScreen
}) {

  const handleClick = () =>{
    if(mudarTelaJogadores) {
        changeScreen("Jogadores")
    }
  }

  return (
    <View style={styles.container}> 
      <Text style={styles.text}>Meu App de Jogos!</Text>
      <Button title="Jogo da Velha" onPress={handleClick}/>
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