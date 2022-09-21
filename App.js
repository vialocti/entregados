import React, {useState} from 'react'
import {useFonts} from 'expo-font'
import { StyleSheet,Text,  View, ActivityIndicator } from 'react-native';
import StartGameScreen from './screens/startgame';
import { colors } from './utils/constants/colors'
import GameInProcess from './screens/gameinprocess';
import GameOverScreen from './screens/game-over';

export default function App() {

  const [position, setPosition] = useState(0)
  const [finJuego, setFinJuego] = useState(false)
  const [acerto, setAcerto] = useState(false)

  const [loaded] = useFonts({
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
    'Lato-Light': require('./assets/fonts/Lato-Light.ttf'),
    'Lato-Italic': require('./assets/fonts/Lato-Italic.ttf'),
    'Lato-Black': require('./assets/fonts/Lato-Black.ttf'),
  });
  

  if(!loaded) {
    return (
      <View style={styles.containerLoader}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    )
  }

  const onGameOver = (finJ,resu) => {
    setFinJuego(finJ);
    setAcerto(resu);
  }

  const onRestartGame = () => {
    setFinJuego(false);
    setPosition(0);
  }
  const handleSetPosition = (positionGenerada)=>{
    setPosition(positionGenerada)
    
  }

  

  let pageContent = <StartGameScreen onStarGame={handleSetPosition} />
  
  if(position && !finJuego){
    pageContent=<GameInProcess positionGenerada={position} onExit={handleSetPosition}onGameOver={onGameOver} />
  }else if(finJuego){
    pageContent = <GameOverScreen acierto={acerto} posicion={position} onRestartGame={onRestartGame}/>
  }

  return (
    <View style={styles.container}>
      <View style={styles.cabecera}>
          <Text style={styles.gametitle}>Donde esta Escondida</Text>
      </View>
      {pageContent}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cabecera:{
    marginTop:30,
    height:'15%',
    backgroundColor:'#000000',
    justifyContent:'center',
    alignItems:'center',
    padding: 15,
    width: '90%',
},
gametitle:{
  fontSize:24,
  color: colors.gray,
},
});
