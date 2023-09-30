import { Button, StyleSheet, Text, View } from "react-native";

export default function Forca ({
  nomePalavra,
  changeScreen
}) {

  const handleClick = () => {
    props.changeScreen("Palavra")
  }

  return (
    <View style={styles.container}>
        <Button title="Voltar" onPress={handleClick}/>
        <Text style={styles.text}>Jogo da Velha</Text>
    </View>
  )
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#98c1d9',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 15
}
})