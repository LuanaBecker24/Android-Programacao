import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Home from './src/home';
import JogadoresMemoria from './src/jogoDaMemoria/JogadoresMemoria';
import JogoMemoria from './src/jogoDaMemoria/JogoMemoria';
import JogadoresVelha from './src/jogoDaVelha/JogadoresVelha';
import JogoVelha from './src/jogoDaVelha/JogoVelha';
import Forca from './src/jogoForca/Forca';
import Palavra from './src/jogoForca/Palavra';

export default function App() {
  const [screen, setScreen] = useState("Home");
  const [jogador1, setJogador1] = useState("");
  const [jogador2, setJogador2] = useState("");
  const [palavra, setPalavra] = useState("");

  const checkScreen = (checkScreen) => checkScreen === screen;

  const setJogadores = (nome1, nome2) => {
    setJogador1(nome1);
    setJogador2(nome2);
  }
 
  const changeScreen = (newScreen) => setScreen(newScreen);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {checkScreen("Home") && (
        <Home changeScreen={changeScreen} />
      )}
      {checkScreen("JogadoresVelha") && (
        <JogadoresVelha 
          jogadoresVelha={setJogadores}
          changeScreen={changeScreen}
        />
      )}
      {checkScreen("JogoVelha") && (
        <JogoVelha 
          jogador1={jogador1}
          jogador2={jogador2}
          changeScreen={changeScreen}
        />
      )}
      {checkScreen("JogadoresMemoria") && (
        <JogadoresMemoria
          jogadoresMemoria={setJogadores}
          changeScreen={changeScreen}
        />
      )}
      {checkScreen("JogoMemoria") && (
        <JogoMemoria 
          jogador1={jogador1}
          jogador2={jogador2}
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
    backgroundColor: "#FEF9EF",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: 15,
  },
});


