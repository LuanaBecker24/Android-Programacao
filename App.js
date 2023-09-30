import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Home from './src/home';
import Jogadores from './src/jogoDaVelha/Jogadores';
import JogoVelha from './src/jogoDaVelha/JogoVelha';
import Palavra from './src/jogoForca/Palavra';

export default function App() {
  const [screen, setScreen] = useState("Home");
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [palavra, setPalavra] = useState("");

  const checkScreen = (checkScreen) => checkScreen === screen;

  const setJogadores = (nome1, nome2) => {
    setPlayer1(nome1);
    setPlayer2(nome2);
  }
 
  const changeScreen = (newScreen) => setScreen(newScreen);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {checkScreen("Home") && (
        <Home changeScreen={changeScreen} />
      )}
      {checkScreen("Jogadores") && (
        <Jogadores 
          mudarNomeJogadores={setJogadores}
          changeScreen={changeScreen}
        />
      )}
      {checkScreen("JogoVelha") && (
        <JogoVelha 
          player1={player1}
          player2={player2}
          changeScreen={changeScreen}
        />
      )}
      {checkScreen("Palavra") && (
        <Palavra 
          nomePalavra={setPalavra}
          changeScreen={changeScreen}
        />
      )}
      {checkScreen("Forca") && (
        <Forca
          palavra={palavra}
          changeScreen={changeScreen}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#98c1d9',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});


