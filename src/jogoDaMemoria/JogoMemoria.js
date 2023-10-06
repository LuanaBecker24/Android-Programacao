import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Button } from "react-native";

export default function JogoMemoria(props) {
  const [cards, setCards] = useState([]);
  const [cardsSelecionados, setCardsSelecionados] = useState([]);
  const [pares, setPares] = useState([]);
  const [jogadorAtualIndex, setJogadorAtualIndex] = useState(0);
  const jogadores = props.jogadoresMemoria || [{ nome: "Jogador 1" }, { nome: "Jogador 2" }];

  const handleClick = () => {
    props.changeScreen("JogadoresMemoria")
  }

  function embaralharArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  useEffect(() => {
    const allCards = [];
    for (let i = 1; i <= 25; i++) {
      allCards.push({ id: i, value: i });
      allCards.push({ id: i + 25, value: i });
    }
    const embaralharCards = embaralharArray(allCards);
    setCards(embaralharCards);
  }, []);

  const handleCardClick = (card) => {
    if (cardsSelecionados.length < 2 && !cardsSelecionados.includes(card) && !pares.includes(card)) {
      setCardsSelecionados([...cardsSelecionados, card]);
    }
  };
 
  useEffect(() => {
    if (cardsSelecionados.length === 2) {
      if (cardsSelecionados[0].value === cardsSelecionados[1].value) {
        setPares([...pares, ...cardsSelecionados]);
      }
      setTimeout(() => {
        setCardsSelecionados([]);
        // Alternar para o próximo jogador
        setJogadorAtualIndex((jogadorAtualIndex + 1) % jogadores.length);
      }, 1000);
    }
  }, [cardsSelecionados, pares, jogadorAtualIndex, jogadores]);

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Voltar" color="#8b8c89" onPress={handleClick} />
      </View>
      <Text style={styles.text}>Jogo da Memória </Text>

      <Text style={styles.jogadorAtual}>Vez de: {jogadores[jogadorAtualIndex].nome}</Text>

      <View style={styles.board}>
        {cards.map((card) => (
          <TouchableOpacity
            key={card.id}
            style={[
              styles.card,
              cardsSelecionados.includes(card) && styles.cardsSelecionados,
              pares.includes(card) && styles.cardsPares,
            ]}
            onPress={() => handleCardClick(card)}
          >
            {cardsSelecionados.includes(card) || pares.includes(card) ? (
              <Text style={styles.cardText}>{card.value}</Text>
            ) : null}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEF9EF",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: 15,
    padding: 15
  },
  text: {
    fontSize: 25,
    fontWeight: "bold"
  },
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 300,
  },
  card: {
    width: 45,
    height: 35,
    margin: 5,
    backgroundColor: "#e09f3e",
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardsSelecionados: {
    backgroundColor: 'lightcoral',
  },
  embaralharCards: {
    backgroundColor: 'lightgreen',
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
})