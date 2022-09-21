import React from "react";
import { View, Text, StyleSheet, Button, Image} from "react-native";
import Card from "../components/card";
import Header from "../components/header";
import { colors } from "../utils/constants/colors";




const GameOverScreen = ({ acierto, posicion ,onRestartGame }) => {
    return (
        <View style={styles.container}>
             <Header title={acierto?"Enhorabuena Acerto":"Lo siento No acerto"} />
            <Card style={styles.resultContainer}>
            
            <Image source={{ uri: 'https://img.freepik.com/vector-gratis/juego-terminado-efecto-falla_225004-661.jpg?w=2000'}} style={styles.image} />          
                
                <Text style={styles.textResult}>La Ubicacion era la :{posicion}</Text>
            
            <Button 
               onReset title="Reiniciar"
                onPress={onRestartGame}
                color={colors.primary}
            />
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
    },
    resultContainer: {
        width: '60%' ,
        paddingVertical: 10,
        alignItems: 'center',
    },
    textResult: {
        fontSize: 16,
        color: colors.text,
        textAlign: 'center',
        paddingVertical: 5,
        
    }
})

export default GameOverScreen;

//