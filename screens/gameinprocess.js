import React,{useState,useEffect} from 'react'
import {View, Text, Button, StyleSheet, Keyboard, TouchableOpacity} from 'react-native'
import { colors } from '../utils/constants/colors'
import Card from '../components/card'


const GameInProcess = ({positionGenerada,onExit}) => {
  
  
  const positions =['1','2','3','4','5','6','7','8','9'] 
  const [positionElegida, setPositionelegida]=useState(0)
  const [posicion,setPosicion] = useState(positionGenerada)
  const [intentos,setIntentos] =useState(0)
  const [acerto, setAcerto] = useState(false)

  //positions[positionGenerada -1] = 'A'
  useEffect(() => {
    const verificarResu =()=>{
      if(posicion==positionElegida){
        setAcerto(true)
      }
     if(intentos>2){onExit(0)}
     setIntentos((prev)=> prev+1)
    }
    
    verificarResu()
  }, [positionElegida])
  
  
  const onHandleExit =()=>{
      onExit(0)
  }

  
  

  

 
  const botonelegido =(pos)=>{
     
      
    
    setPositionelegida(pos)
      
      
  }


  const resultado = ()=>
    (
    
    <View>
      {
      acerto?<Text>SI</Text>:<Text>NO</Text>
      }
      
    </View>
    
    )
  

  return (
    <View>
      <Text></Text>
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
    <Text>
      {resultado()}
      </Text>
  </View>
  )
  }




const styles = StyleSheet.create({
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