import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import { colors } from '../utils/constants/colors'


const Header = ({title})=>{

    return(
        <View style={styles.containerheader}>
            <Text style={styles.titleheader}>{title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    containerheader: {
        height: 50,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: colors.primary,
        paddingTop: 20,
    },
    titleheader: {
        fontSize: 20,
        color: colors.black,
        fontFamily: 'Lato-Black'
    }
});
export default Header;