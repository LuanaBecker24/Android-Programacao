import { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function JogoVelha(props) {
  const [jogadorAtual, setJogadorAtual] = useState("X");
  const [ganhador, setGanhador] = useState("");
  const { jogador1, jogador2 } = props;
  const [nomeJogador, setNomeJogador] = useState(jogador1);
  const [b1, setB1] = useState("");
  const [b2, setB2] = useState("");
  const [b3, setB3] = useState("");
  const [b4, setB4] = useState("");
  const [b5, setB5] = useState("");
  const [b6, setB6] = useState("");
  const [b7, setB7] = useState("");
  const [b8, setB8] = useState("");
  const [b9, setB9] = useState("");

  const handleClick = () => {
    props.changeScreen("JogadoresVelha");
  };

  const checkGanhador = () => {
    const vencedor = [
      [b1, b2, b3],
      [b4, b5, b6],
      [b7, b8, b9],
      [b1, b4, b7],
      [b2, b5, b8],
      [b3, b6, b9],
      [b1, b5, b9],
      [b3, b5, b7],
    ];

    for (const condicao of vencedor) {
      const [a, b, c] = condicao;
      if (a && a === b && a === c) {
        setGanhador(a === jogador1 ? jogador1 : jogador2);
        return
      }
    }
    if (b1 && b2 && b3 && b4 && b5 && b6 && b7 && b8 && b9 && !ganhador) {
      setGanhador("Empate");
    }
  };

  const handleClickB1 = () => {
    if (b1 === "" && !ganhador) {
      setB1(jogadorAtual);
      console.log("Clicado em B1");
      setNomeJogador(jogadorAtual === jogador1 ? jogador2 : jogador1);
      setJogadorAtual(jogadorAtual === "X" ? "O" : "X");
    }
  };

  const handleClickB2 = () => {
    if (b2 === "" && !ganhador) {
      console.log("Clicado em B1");
      setB2(jogadorAtual);
      setNomeJogador(jogadorAtual === jogador1 ? jogador2 : jogador1);
      setJogadorAtual(jogadorAtual === "X" ? "O" : "X");
    }
  };

  const handleClickB3 = () => {
    if (b3 === "" && !ganhador) {
      setB3(jogadorAtual);
      setNomeJogador(jogadorAtual === jogador1 ? jogador2 : jogador1);
      setJogadorAtual(jogadorAtual === "X" ? "O" : "X");
    }
  };

  const handleClickB4 = () => {
    if (b4 === "" && !ganhador) {
      setB4(jogadorAtual);
      setNomeJogador(jogadorAtual === jogador1 ? jogador2 : jogador1);
      setJogadorAtual(jogadorAtual === "X" ? "O" : "X");
    }
  };

  const handleClickB5 = () => {
    if (b5 === "" && !ganhador) {
      setB5(jogadorAtual);
      setNomeJogador(jogadorAtual === jogador1 ? jogador2 : jogador1);
      setJogadorAtual(jogadorAtual === "X" ? "O" : "X");
    }
  };

  const handleClickB6 = () => {
    if (b6 === "" && !ganhador) {
      setB6(jogadorAtual);
      setNomeJogador(jogadorAtual === jogador1 ? jogador2 : jogador1);
      setJogadorAtual(jogadorAtual === "X" ? "O" : "X");
    }
  };
  const handleClickB7 = () => {
    if (b7 === "" && !ganhador) {
      setB7(jogadorAtual);
      setNomeJogador(jogadorAtual === jogador1 ? jogador2 : jogador1);
      setJogadorAtual(jogadorAtual === "X" ? "O" : "X");
    }
  };

  const handleClickB8 = () => {
    if (b8 === "" && !ganhador) {
      setB8(jogadorAtual);
      setNomeJogador(jogadorAtual === jogador1 ? jogador2 : jogador1);
      setJogadorAtual(jogadorAtual === "X" ? "O" : "X");
    }
  };
  const handleClickB9 = () => {
    if (b9 === "" && !ganhador) {
      setB9(jogadorAtual);
      setNomeJogador(jogadorAtual === jogador1 ? jogador2 : jogador1);
      setJogadorAtual(jogadorAtual === "X" ? "O" : "X");
    }
  };

  useEffect(() => {
    checkGanhador();
    setNomeJogador(jogadorAtual === jogador1 ? jogador2 : jogador1);
  }, [b1, b2, b3, b4, b5, b6, b7, b8, b9, jogadorAtual]);

  return (
    <View style={styles.container}>
      <View style={styles.buttonVoltarContainer}>
        <Button title="Voltar" color="#8b8c89" onPress={handleClick} />
      </View>
      <Text style={styles.text}>Jogo da Velha</Text>

      <View style={styles.botoes}>
        <Button title={b1} color="#e09f3e" onPress={handleClickB1} />
        <Button title={b2} color="#e09f3e" onPress={handleClickB2} />
        <Button title={b3} color="#e09f3e" onPress={handleClickB3} />
      </View>

      <View style={styles.botoes}>
        <Button title={b4} color="#e09f3e" onPress={handleClickB4} />
        <Button title={b5} color="#e09f3e" onPress={handleClickB5} />
        <Button title={b6} color="#e09f3e" onPress={handleClickB6} />
      </View>

      <View style={styles.botoes}>
        <Button title={b7} color="#e09f3e" onPress={handleClickB7} />
        <Button title={b8} color="#e09f3e" onPress={handleClickB8} />
        <Button title={b9} color="#e09f3e" onPress={handleClickB9} />
      </View>

      {ganhador ? (
        ganhador === "Empate" ? (
          <Text style={styles.textJogadas}>Empate!</Text>
        ) : (
          <Text style={styles.textJogadas}>Vencedor: {nomeJogador}</Text>
        )
      ) : (
        <Text style={styles.textJogadas}>Vez de: {nomeJogador}</Text>
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
  botoes: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  textJogadas: {
    fontSize: 18,
    marginTop: 10
  }
});