import React  from 'react'
import { StyleSheet, View } from 'react-native'
import {colors} from '../utils/constants/colors'



const Card = ({children, style})=>{
   return(
    <View style={{...styles.containerCard,...style}}>
        {children}
    </View>
   )
}

const styles= StyleSheet.create({
    containerCard:{
        marginTop:40,
        paddingTop: 30,
        shadowColor: '#00FF00',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.43,
        shadowRadius: 4.62,
        elevation: 7,
        backgroundColor: colors.background,
        borderRadius: 20,

    }
}) 





export default Card