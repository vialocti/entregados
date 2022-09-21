import React from 'react'
import { Text, View, StyleSheet,  TouchableOpacity } from 'react-native'
import Card from '../components/card'
import Header from '../components/header'
import { colors } from '../utils/constants/colors'
import { generadordeNumerosalazarBetween} from '../utils/functions/functionsvarias'




const StartGameScreen = ({onStarGame})=>{

    const onHandleStartGame =()=>{

        const numeroG = generadordeNumerosalazarBetween(1,10,10)
        
        onStarGame(numeroG)
      }

    return(
        <View style={styles.containerscreen}>
          

            <Header title="Inicio del Juego" />
            
            <Card style={styles.cuerpoInicio}>
            
                <View style={styles.reglasjuego}>
                    <Text style={styles.textohelp}>
                        El objetivo del Juego es adivinar detras de que casilla
                        se encuentra la letra A, se muestra una matriz de 3 filas y 3 columnas
                        numeradas del 1 al 9, y tiene 3 intentos para acertar donde esta.
                        SUERTE!!!
                    </Text>
                </View>
                <View style={styles.botoncontainer}>
                    
                    <TouchableOpacity 
                        style={styles.botoncontainer}
                        onPress={onHandleStartGame}
                        >
                        <Text>Jugar</Text>
                    </TouchableOpacity>


                </View>
            
            </Card>
        </View>
    )
}


const styles = StyleSheet.create({

    containerscreen:{
        flex:1,
        alignItems:'center',
        

    },
    
    gametitle:{
        fontSize:24,
        color: colors.gray,
    },

    reglasjuego:{
        padding: 20,
        backgroundColor:colors.primary
        
    },
    textohelp:{
        fontSize:16,
        fontWeight:'bold',
        color:colors.black,
    },
    botoncontainer:{
        padding:5,
        alignItems:'center',
    },
    cuerpoInicio:{
        marginHorizontal:20,
        
    },

})

export default StartGameScreen
