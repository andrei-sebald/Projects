import React from "react";
import{View,Image, StyleSheet} from "react-native"

const IsoScreen = ({navigation})=>{
    return(
        <Image
            style={styles.logo}
            source={require('../../assets/cleanroom.png')}
        />


    )
}

const styles=  StyleSheet.create({

    logo:{
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        
    }
})

export default IsoScreen