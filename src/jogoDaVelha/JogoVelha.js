import { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function JogoVelha(props) {
  //guarda o valor "X" ou "O" para indicar qual jogador está jogando.
  const [jogadorAtual, setJogadorAtual] = useState("X");
  // é usado para armazenar o resultado do jogo.
  const [ganhador, setGanhador] = useState("");
  const { jogador1, jogador2 } = props;
  //todas representam o que vai estar dentro delas, por enquanto estão sem nada,
  //mas dps vão ter valor("X ou O").
  const [b1, setB1] = useState("");
  const [b2, setB2] = useState("");
  const [b3, setB3] = useState("");
  const [b4, setB4] = useState("");
  const [b5, setB5] = useState("");
  const [b6, setB6] = useState("");
  const [b7, setB7] = useState("");
  const [b8, setB8] = useState("");
  const [b9, setB9] = useState("");

  //para o botão de voltar
  const handleClick = () => {
    props.changeScreen("JogadoresVelha");
  };

  //os jeitos para ganhar, aqui ele verifica de acordo com a lógica se o jogador ganhou ou não
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

    //aqui inicia um loop "for...of"
    for (const condicao of vencedor) {
      //aqui as três casas a, b e c são estruturadas em três elementos, que seria tipo a condição
      //para ganhar, se for verdadeiro retorna como jogador e a jogada acaba.
      const [a, b, c] = condicao;
      if (a && a === b && a === c) {
        //aqui ele pega o a, porque vai pegar o conteúdo que está dentro de "a" que vai ser o ganhador.
        setGanhador(a);
        return;
      }
    }
    //se não é considerado empate
    if (b1 && b2 && b3 && b4 && b5 && b6 && b7 && b8 && b9 && !ganhador) {
      setGanhador("Empate");
    }
  };

  //aqui ele faz a verificação se o botão clicado, já havia sido clicado ou se já houve um ganhador
  //se não, ele coloca X ou O para o jogador atual, onde vai ocorrer essa alternação para a próxima jogada.
  const handleClickB1 = () => {
    if (b1 === "" && !ganhador) {
      setB1(jogadorAtual);
      //Se jogadorAtual for "X", ela define jogadorAtual como "O".
      //Se jogadorAtual for "O", ela define jogadorAtual como "X".
      setJogadorAtual(jogadorAtual === "X" ? "O" : "X");
    }
  };

  const handleClickB2 = () => {
    if (b2 === "" && !ganhador) {
      setB2(jogadorAtual);
      setJogadorAtual(jogadorAtual === "X" ? "O" : "X");
    }
  };

  const handleClickB3 = () => {
    if (b3 === "" && !ganhador) {
      setB3(jogadorAtual);
      setJogadorAtual(jogadorAtual === "X" ? "O" : "X");
    }
  };

  const handleClickB4 = () => {
    if (b4 === "" && !ganhador) {
      setB4(jogadorAtual);
      setJogadorAtual(jogadorAtual === "X" ? "O" : "X");
    }
  };

  const handleClickB5 = () => {
    if (b5 === "" && !ganhador) {
      setB5(jogadorAtual);
      setJogadorAtual(jogadorAtual === "X" ? "O" : "X");
    }
  };

  const handleClickB6 = () => {
    if (b6 === "" && !ganhador) {
      setB6(jogadorAtual);
      setJogadorAtual(jogadorAtual === "X" ? "O" : "X");
    }
  };
  const handleClickB7 = () => {
    if (b7 === "" && !ganhador) {
      setB7(jogadorAtual);
      setJogadorAtual(jogadorAtual === "X" ? "O" : "X");
    }
  };

  const handleClickB8 = () => {
    if (b8 === "" && !ganhador) {
      setB8(jogadorAtual);
      setJogadorAtual(jogadorAtual === "X" ? "O" : "X");
    }
  };
  const handleClickB9 = () => {
    if (b9 === "" && !ganhador) {
      setB9(jogadorAtual);
      setJogadorAtual(jogadorAtual === "X" ? "O" : "X");
    }
  };
  //aqui toda vez que uma dessas "variáveis" forem chamadas ele vai "ativar" e verificar se o jogo
  // já possui um ganhador e prescisa ser parado o jogo.
  useEffect(() => {
    checkGanhador();
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
          alert("Empate!")
        ) : (
          alert(`Ganhador: ${ganhador === "X" ? jogador1 : jogador2}`)
        )
      ) : (
        <Text style={styles.textResultado}>
          Jogador Atual: {jogadorAtual === "X" ? jogador1 : jogador2}
        </Text>
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
  text: {
    fontSize: 25,
    fontWeight: "bold",
  },
  botoes: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  textJogadas: {
    fontSize: 18,
    marginTop: 10,
  },
  textResultado: {
    marginTop: 15,
    fontSize: 18
  }
});
