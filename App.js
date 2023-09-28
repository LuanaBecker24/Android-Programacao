import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View} from 'react-native';
import Jogadores from './src/Jogadores';
import JogoVelha from './src/JogoVelha';
import Home from './src/home';

export default function App() {
  const [screen, setScreen] = useState("Jogadores");
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  const checkScreen = (checkScreen) => checkScreen === screen;

  const setJogadores = (nome1, nome2) => {
    setPlayer1(nome1);
    setPlayer2(nome2);
  }
 
  const changeScreen = (newScreen) => setScreen(newScreen);

  return (
    <View style={styles.container}> 
      <StatusBar style="auto" />
      {checkScreen("Jogadores") && (
      <Jogadores 
        mudarNomeJogadores={setJogadores}
        changeScreen={changeScreen}
      />
      )}
    {checkScreen("JogoVelha") && <JogoVelha  changeScreen={changeScreen} />}
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


