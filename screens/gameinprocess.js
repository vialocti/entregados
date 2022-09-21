import React,{useState,useEffect} from 'react'
import {View, Text, Button, StyleSheet, Keyboard, TouchableOpacity} from 'react-native'
import { colors } from '../utils/constants/colors'
import Card from '../components/card'
import Header from '../components/header'



const GameInProcess = ({positionGenerada,onExit,onGameOver}) => {
  
  
  const positions =['1','2','3','4','5','6','7','8','9'] 
  const [positionElegida, setPositionelegida]=useState(0)
  const [posicion,setPosicion] = useState(positionGenerada)
  const [intentos,setIntentos] =useState(1)
  const [elegidosPos, setElegidosPos] = useState([])
  const [finjuego,setFinJuego] = useState(false)
 
  //positions[positionGenerada -1] = 'A'
  
  
  
  useEffect(() => {
    
    
   const verificarResu =()=>{
     setElegidosPos(prevE =>[...prevE, 0])
     setIntentos((prev)=> prev+1)
    
      if(posicion==positionElegida){

          onGameOver(true,true)
        }
     if(intentos>2){setFinJuego(true)}
     
     if(finjuego){onGameOver(true,false)}
     
    }
    
    verificarResu()
    
  }, [positionElegida,onGameOver])
  
  
  const onHandleExit =()=>{
      onExit(0)
  }

  const botonelegido =(pos)=>{
     setPositionelegida(pos)
      
  }


   return (
    <View style={styles.container}>
       <Header title="Juego en Curso" />
      <Card style={styles.containerCard}>
        <View style={styles.cuadricula}>
         {positions.map((ele, ind)=>
            <TouchableOpacity key={ind} onPress={()=>botonelegido(ele)}>
              <Text style={styles.cuadro}>
                {ele}
              </Text>
            </TouchableOpacity>
            
          )}
        </View>
      </Card>
   

      <View>
      
        <Button 
          title="Volver"
          onPress={onHandleExit}
        />
      </View>
    {elegidosPos.map((ele, ind)=>
     <Text key={ind}>Proximo Intento:{ind+1}</Text>
    )} 
  </View>
  )
  }




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
   
  }, 
  
  cuadricula:{
    
      
      flex: 1,
      flexDirection:'row',
      flexWrap:'wrap',
      justifyContent:'space-between'
   },
   cuadro:{
      width: 50,
      height: 50,
      padding: 10,
      borderColor:'black',
      borderWidth:2,
      fontSize:18,
      margin:5,
      textAlign:'center'
      
   },
   input: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    marginVertical: 22,
    ontFamily: 'Lato-Regular'
},
containerCard:{
  height: '50%',
  width: '60%',
  padding: 10,
}

})

export default GameInProcess