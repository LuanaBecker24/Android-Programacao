import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default function Home ({
  mudarNomeJogadores,
  changeScreen
}) {

    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");

  const handleClick = () =>{
    if(mudarNomeJogadores) {
        mudarNomeJogadores(player1, player2)
        changeScreen("jogo")
    }
  }

  return (
    <View style={styles.container}> 
      <Text style={styles.text}>1° Jogador: {player1}</Text>
      <TextInput placeholder="Player1" style={styles.input} value={player1} onChangeText={setPlayer1}/>

      <Text style={styles.text}>2° Jogador: {player2}</Text>
      <TextInput placeholder="Player2" style={styles.input} value={player2} onChangeText={setPlayer2}/>

      <Button title="Botao" onPress={handleClick}/>
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
