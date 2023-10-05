import { useState, useEffect} from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";

export default function Forca(props) {
  const { palavra } = props;
  const [letraAdivinhada, setLetraAdivinhada] = useState("");
  const [letrasAdivinhadas, setLetrasAdivinhadas] = useState([]);
  const [palavraCompleta, setPalavraCompleta] = useState(false);
  const [pontuacao, setPontuacao] = useState(6);
  const [continuaJogo, setContinuaJogo] = useState(true);

  const handleClick = () => {
    props.changeScreen("Palavra")
  }

  const linhas = palavra.split('').map((letra, index) => (
    <Text key={index}>{letrasAdivinhadas.includes(letra) ? letra : "_"}</Text>
  ));

  const handleAdivinhar = () => {
    if (!letrasAdivinhadas.includes(letraAdivinhada)) {
      setLetrasAdivinhadas([...letrasAdivinhadas, letraAdivinhada]);
    }
    if (!palavra.includes(letraAdivinhada)) {
      setPontuacao(pontuacao - 1);
    }
    if (!continuaJogo) {
      return;
    }
    setLetraAdivinhada("");
  }

  useEffect(() => {
    const todasLetrasAdivinhadas = palavra.split('').every(letra => letrasAdivinhadas.includes(letra));
    if (todasLetrasAdivinhadas) {
      setPalavraCompleta(true);
    }
    if (pontuacao <= 0) {
      setContinuaJogo(false);
    }
  }, [palavra, letrasAdivinhadas, pontuacao]);


  return (
    <View style={styles.container}>
      <Button title="Voltar" color="#8b8c89" onPress={handleClick} />
      <Text style={styles.text}>Forca</Text>
      <Text style={styles.pontuacao}>Pontuação: {pontuacao}</Text>

      <View style={styles.forcaContainer}>
        {linhas.map((letra, index) => (
        <Text key={index} style={{ ...styles.letra, fontSize: 30 }}>{letra}</Text>
        ))}
      </View>
 
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma letra"
          value={letraAdivinhada}
          onChangeText={text => setLetraAdivinhada(text)}
          editable={continuaJogo}
        />
        <Button title="Adivinhar" color="#e09f3e" onPress={handleAdivinhar} />
      </View>

      {palavraCompleta && (
        <Text style={styles.ganhou}>🎉 Parabéns! 🎉</Text>
      )}

      {!continuaJogo && (
        <Text style={styles.perdeu}>Não foi dessa vez! 🤡</Text>
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
    gap: 15
  },
  text: {
    fontSize: 25,
    fontWeight: "bold"
  },
  forcaContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
    padding: 15
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    width: "45%",
    height: 35,
    borderStyle: "solid",
    borderColor: "black",
    borderRadius: 3,
    borderWidth: 2,
    padding: 5,
    marginRight: 10
  },
  ganhou: {
    marginTop: 18,
    fontSize: 18,
    fontWeight: "bold",
    color: "#6a994e"
  },
  perdeu: {
    marginTop: 18,
    fontSize: 18,
    fontWeight: "bold",
    color: "#bc4749"
  },
  pontuacao: {
    fontSize: 17,
    marginTop: 10
  }, 
  letra: {
    fontSize: 18
  },
})