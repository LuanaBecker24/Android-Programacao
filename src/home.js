import { Button, StyleSheet, Text, View } from "react-native";

export default function Home({ changeScreen }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Meu App de Jogos!</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Jogo da Velha"
          color="#e09f3e"
          onPress={() => changeScreen("JogadoresVelha")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Jogo da Memória"
          color="#e09f3e"
          onPress={() => changeScreen("JogadoresMemoria")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Forca"
          color="#e09f3e"
          onPress={() => changeScreen("Palavra")}
        />
      </View>
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
    fontSize: 30,
    marginBottom: 15,
    fontWeight: "bold",
  },
  buttonContainer: {
    width: 300,
    height: 35,
  },
});
