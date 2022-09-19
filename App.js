import React, {useState} from 'react'
import {useFonts} from 'expo-font'
import { StyleSheet,  View, ActivityIndicator } from 'react-native';
import StartGameScreen from './screens/startgame';
import { colors } from './utils/constants/colors'
import GameInProcess from './screens/gameinprocess';

export default function App() {

  const [position, setPosition] = useState(0)

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


  const handleSetPosition = (positionGenerada)=>{
    setPosition(positionGenerada)
    
  }

  

  let pageContent = <StartGameScreen onStarGame={handleSetPosition} />
  
  if(position){
    pageContent=<GameInProcess positionGenerada={position} onExit={handleSetPosition} />
  }

  return (
    <View style={styles.container}>
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
});
