import { Button, StyleSheet, Text, View } from "react-native";

export default function JogoMemoria(props) {

  const handleClick = () => {
    props.changeScreen("JogadoresMemoria")
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Voltar" color="#8b8c89" onPress={handleClick} />
      </View>
      <Text style={styles.text}>Jogo da Memória</Text>
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
  },
  text: {
    fontSize: 25,
    fontWeight: "bold"
  },
  buttonContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "center",
    margin: 12,
    gap: 20,
  }
})