import { Button, StyleSheet, Text, View } from "react-native";

export default function Forca(props) {

  const handleClick = () => {
    props.changeScreen("Palavra")
  }

  return (
    <View style={styles.container}>
      <Button title="Voltar" color="#8b8c89" onPress={handleClick} />
      <Text style={styles.text}>Forca</Text>
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
    fontWeight: "bold"
  },
})