import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";

export default function JogoMemoria(props) {
  const [cartas, setCartas] = useState([]);
  const [paresEncontrados, setParesEncontrados] = useState([]);
  const [viradas, setViradas] = useState([]);
  const { jogador1, jogador2 } = props;
  const [jogadorAtual, setJogadorAtual] = useState(jogador1);
  const [pontuacaoJogador1, setPontuacaoJogador1] = useState(0);
  const [pontuacaoJogador2, setPontuacaoJogador2] = useState(0);
  const [jogoTerminou, setJogoTerminou] = useState(false);
  const [podeVirarCartas, setPodeVirarCartas] = useState(true);

  const handleClick = () => {
    props.changeScreen("JogadoresMemoria");
  };

  const simbolos = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
  ];

  useEffect(() => {
    const cartasIniciais = [];
    for (let i = 0; i < 25; i++) {
      cartasIniciais.push({ id: i, simbolo: simbolos[i], virada: false });
      cartasIniciais.push({ id: i + 25, simbolo: simbolos[i], virada: false });
    }
    embaralhar(cartasIniciais);
    setCartas(cartasIniciais);
    setJogadorAtual(jogador1);
  }, [jogador1, jogador2]);

  const handleCardPress = (id) => {
    if (viradas.length < 2 && podeVirarCartas) {
      const cartaClicada = cartas.find((carta) => carta.id === id);
      if (
        !cartaClicada.virada &&
        !paresEncontrados.includes(cartaClicada.simbolo)
      ) {
        const novasCartas = cartas.map((carta) =>
          carta.id === id ? { ...carta, virada: true } : carta
        );
        setCartas(novasCartas);
        setViradas([...viradas, cartaClicada]);

        if (viradas.length === 1) {
          if (viradas[0].simbolo === cartaClicada.simbolo) {
            // Se as cartas forem iguais, adicione o símbolo aos pares encontrados
            setParesEncontrados([...paresEncontrados, cartaClicada.simbolo]);

            if (jogadorAtual === jogador1) {
              setPontuacaoJogador1(pontuacaoJogador1 + 1);
            } else {
              setPontuacaoJogador2(pontuacaoJogador2 + 1);
            }
          }
          setTimeout(() => {
            const cartasVirarDeVolta = cartas.map((carta) =>
              carta.virada && !paresEncontrados.includes(carta.simbolo)
                ? { ...carta, virada: false } : carta
            );
            setCartas(cartasVirarDeVolta);
            setJogadorAtual(jogadorAtual === jogador1 ? jogador2 : jogador1);
            setViradas([]);
          }, 1000);
        } else if (viradas.length === 2 && !paresEncontrados.includes(cartaClicada.simbolo)) {
          setPodeVirarCartas(false); // Impede o jogador de virar outras cartas temporariamente
          setTimeout(() => {
            const cartasVirarDeVolta = cartas.map((carta) =>
              carta.virada && !paresEncontrados.includes(carta.simbolo)
                ? { ...carta, virada: false } : carta
            );
            setCartas(cartasVirarDeVolta);
            setJogadorAtual(jogadorAtual === jogador1 ? jogador2 : jogador1);
            setViradas([]);
            setPodeVirarCartas(true); // Permite que o jogador vire cartas novamente
          }, 1000);
        }
      }
    }
  };

  const embaralhar = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const renderCard = (carta) => (
    <TouchableOpacity
      key={carta.id}
      style={[
        styles.card,
        (carta.virada || paresEncontrados.includes(carta.simbolo)) &&
          styles.cardVirada,
      ]}
      onPress={() => handleCardPress(carta.id)}
      disabled={
        paresEncontrados.includes(carta.simbolo) || carta.virada
      }
    >
      {carta.virada || paresEncontrados.includes(carta.simbolo) ? (
        <Text style={styles.cardText}>{carta.simbolo}</Text>
      ) : (
        <Text></Text>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Voltar" color="#8b8c89" onPress={handleClick} />
      </View>
      <Text style={styles.text}>Jogo da Memória </Text>

      <Text style={styles.jogador}>Jogador atual: {jogadorAtual}</Text>
      <Text style={styles.pontuacao}>
        {jogador1}: {pontuacaoJogador1} {jogador2}: {pontuacaoJogador2}
      </Text>

      <View style={styles.board}>
        {cartas.map((carta) => renderCard(carta))}
      </View>

      {jogoTerminou && (
        alert(
          "Fim do jogo",
          `Vencedor: ${
            pontuacaoJogador1 > pontuacaoJogador2
              ? jogador1
              : pontuacaoJogador2 > pontuacaoJogador1
              ? jogador2
              : "Empate"
          }`
        )
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
    padding: 15,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
  },
  board: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    width: 50,
    height: 35,
    backgroundColor: "#e09f3e",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  cardVirada: {
    backgroundColor: "#f2cc8f",
  },
  cardText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  jogador: {
    fontSize: 18,
  },
  pontuacao: {
    fontSize: 15,
  },
});