import { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";

export default function Forca(props) {
  //aqui ele espera extrair o que foi escrito no input de palavra
  const { palavra } = props;
  //vai ser usada para atualizar o estado do jogo, por enquanto é uma string vazia
  const [letraAdivinhada, setLetraAdivinhada] = useState("");
  //é um array vazia, que vai servir para armazenar as letras já adivinhadas
  const [letrasAdivinhadas, setLetrasAdivinhadas] = useState([]);
  //ele começa como falso, pois ele vai estar verificando se a pessoa acertou todas as letras,
  //assim mudando seu valor para true
  const [palavraCompleta, setPalavraCompleta] = useState(false);
  //aqui o jogador vai iniciar com 6 pontos, e essa pontuação vai ser atualizada durante o jogo
  const [pontuacao, setPontuacao] = useState(6);
  //aqui é verificado se o jogador ainda possui pontos para continuar jogando, por isso começa com true
  //assim que o jogador não possuir mais nenhum ponto o estado muda para false
  const [continuaJogo, setContinuaJogo] = useState(true);
  const letra = letraAdivinhada.toLowerCase();

  const handleClick = () => {
    props.changeScreen("Palavra");
  };

  //aqui é dividido a palavra que foi exportada em caracteres
  const linhas = palavra.split("").map((letra, index) => (
    //o key é definido como index que é exclusivo para cada elemento em uma lista
    //assim ele vai verificar se a letra está contida na palavra ou se já foi adivinhada
    //se foi ela é uma condição verdadeira e vai aparecer no lugar do _, se não só permanece o _
    <Text key={index} style={styles.linhasEstlizadas}>
      {letrasAdivinhadas.includes(letra) ? letra : "_"}
    </Text>
  ));

  const handleAdivinhar = () => {
    //verifica se a letra que o jogador tentou adivinhar ainda não foi adivinhada anteriormente se não foi
    //isso será executado
    if (!letrasAdivinhadas.includes(letraAdivinhada)) {
      //aqui ela vai colocar essa letra na lista
      setLetrasAdivinhadas([...letrasAdivinhadas, letraAdivinhada]);
    }
    //aqui ele faz a verificação se o jogador colocou uma letra que faz parte da palavra
    if (!palavra.includes(letraAdivinhada)) {
      //se não tiver essa letra na palavra a pontuação é setada e é tirado um ponto do jogador
      setPontuacao(pontuacao - 1);
    }
    //aqui é verificado se o jogo ainda continua, se for falso ela nem faz mais nada para baixo disso
    if (!continuaJogo) {
      return;
    }
    if (!/[a-zA-Z]/.test(letra) || letra.length !== 1) {
      alert("Digite uma única letra válida.");
      return;
    }
    if (letrasAdivinhadas.includes(letra)) {
      alert("Você já adivinhou esta letra antes.");
      return;
    }
    if (!/^[a-zA-Z]+$/.test(letra) || letra.length !== 1) {
      alert("Digite uma única letra válida.");
      return;
    }  
    //aqui a string fica limpa novamente para a pessoa tentar outra letra
    setLetraAdivinhada("");
  };

  //aqui as letras serão filtradas da matriz das letras adivinhadas,
  //para saber se elas estão na palavra ou não
  const letrasIncorretas = letrasAdivinhadas.filter(
    //assim que a função retornar a palavra vendo que ela não faz parte das letras adivinhadas
    //ele coloca essa letra na matriz de palavras incorretas
    (letra) => !palavra.includes(letra)
  );

  //aqui será executado assim que alguma "variável for mexida"
  useEffect(() => {
    //aqui ele verifica cada letra e ve se fazem parte da palavra e se ela foi completada
    const todasLetrasAdivinhadas = palavra
      .split("")
      .every((letra) => letrasAdivinhadas.includes(letra));
    //se todas as palavras foram adivinhadas ele retorna true
    if (todasLetrasAdivinhadas) {
      setPalavraCompleta(true);
    }
    //aqui vai ser inicializado se a pontuação for igual ou menor que zero, se sim ele retorna um false
    //e assim para o jogo mostrando que a pessoa perdeu
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
          <Text key={index} style={styles.letra}>
            {letra}
          </Text>
        ))}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma letra"
          value={letraAdivinhada}
          onChangeText={(text) => setLetraAdivinhada(text)}
          editable={continuaJogo}
        />

        <Button
          title="Adivinhar"
          color="#e09f3e"
          onPress={handleAdivinhar}
          disabled={!continuaJogo || palavraCompleta}
        />
      </View>

      <Text style={styles.tentativasLetras}>Tentativas de letras: </Text>

      {letrasIncorretas.length > 0 && (
        <View style={styles.letrasIncorretas}>
          {letrasIncorretas.map((letra, index) => (
            <Text key={index} style={styles.tentativas}>
              {letra}
            </Text>
          ))}
        </View>
      )}

      {palavraCompleta && alert("🎉 Parabéns! 🎉") }

      {!continuaJogo && 
        alert("Não foi dessa vez! 🤡")
      }
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
  forcaContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
    padding: 15,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "45%",
    height: 35,
    borderStyle: "solid",
    borderColor: "black",
    borderRadius: 3,
    borderWidth: 2,
    padding: 5,
    marginRight: 10,
  },
  pontuacao: {
    fontSize: 17,
    marginTop: 10,
  },
  letra: {
    fontSize: 18,
  },
  letrasIncorretas: {
    flexDirection: "row",
    justifyContent: "center",
  },
  tentativas: {
    marginRight: 5,
    fontSize: 18,
  },
  tentativasLetras: {
    fontSize: 18,
    marginTop: 18,
  },
});
