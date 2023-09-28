import { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function JogoVelha(props) {
    const [b1, setB1] = useState("")
    const [b2, setB2] = useState("")
    const [b3, setB3] = useState("")
    const [b4, setB4] = useState("")
    const [b5, setB5] = useState("")
    const [b6, setB6] = useState("")
    const [b7, setB7] = useState("")
    const [b8, setB8] = useState("")
    const [b9, setB9] = useState("")

    const handleClickB1 = (b, setb) => {
        if(b1 === "X") {
            setB1("O");
        } else {setB1("X")}
    }

    const handleClickB2 = () => {
        if(b2 === "X") {
            setB2("O");
        } else {setB2("X")}
    }

    const handleClickB3 = () => {
        if(b3 === "X") {
           setB3("O");
        } else {setB3("X")}
    }

    const handleClickB4 = () => {
        if(b4 === "X") {
            setB4("O");
        } else {setB4("X")}
    }

    const handleClickB5 = () => {
        if(b5 === "X") {
            setB5("O");
        } else {setB5("X")}
    }

    const handleClickB6 = () => {
        if(b6 === "X") {
            setB6("O");
        } else {setB6("X")}
    }

    const handleClickB7 = () => {
        if(b7 === "X") {
            setB7("O");
        } else {setB7("X")}
    }

    const handleClickB8 = () => {
        if(b8 === "X") {
            setB8("O");
        } else {setB8("X")}
    }

    const handleClickB9 = () => {
        if(b9 === "X") {
            setB9("O");
        } else {setB9("X")}
    }

    const handleClick = () => {
        props.changeScreen("Jogadores")
    }

    return (
        <View style={styles.container}>
            <Button title="Voltar" onPress={handleClick}/>
            <Text style={styles.text}>Jogo da Velha</Text>
            <Button title={b1} onPress={handleClickB1}/>
            <Button title={b2} onPress={handleClickB2}/>
            <Button title={b3} onPress={handleClickB3}/>
            <Button title={b4} onPress={handleClickB4}/>
            <Button title={b5} onPress={handleClickB5}/>
            <Button title={b6} onPress={handleClickB6}/>
            <Button title={b7} onPress={handleClickB7}/>
            <Button title={b8} onPress={handleClickB8}/>
            <Button title={b9} onPress={handleClickB9}/>
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
    },
    text: {
      fontSize: 30,
    }
})