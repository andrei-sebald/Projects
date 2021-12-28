import React from 'react'
import {View, Text,Image, StyleSheet, TouchableOpacity} from 'react-native'

const HomeScreen=({navigation})=>{

    return(<View style={styles.container}>
        <Image
        style={styles.logo}
        source={require('../../assets/image.png')}
        /> 
        <Text style={styles.text}>Toolkit</Text> 
        <TouchableOpacity
            style={styles.button}
            onPress={()=> navigation.navigate('Conversion')}
        >
            <Text style={styles.buttonText}>Simple Conversion</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
            onPress={()=> navigation.navigate('Cleanroom')}
        >
            <Text style={styles.buttonText}>Cleanroom</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
            onPress={()=> navigation.navigate('Error')}
        >
            <Text style={styles.buttonText}>Error</Text>
        </TouchableOpacity>
    </View>)
}
const styles=  StyleSheet.create({
    text:{
        fontSize:40,
        fontWeight: 'bold',
        color: '#BDEDFF',
        textAlign: 'center',
        fontFamily:"Futura",
        
    },
    logo:{

        width: 220,
        height: 150,
        marginLeft:100,
        marginTop:80,
        marginBottom: 15,
        borderWidth: 4,
        borderRadius: 15,
        borderColor: '#BDEDFF'

    },
    button:{
        alignItems: "center",
        backgroundColor: "#368BC1",
        margin: 15,
        padding: 10,
        // shadowColor: '#6495ED',
        // shadowOpacity: 3,
        // shadowRadius: 5 ,
        // shadowOffset : { width: 1, height:5},
        borderRadius: 400,
        borderWidth: 2,
        borderColor: '#BDEDFF'
    },
    container: {
        backgroundColor: "#123456",
        flex:1

    },
    buttonText:{
        color:"white",
        fontSize: 20,
        fontFamily:"Futura"

       
    }

})
export default HomeScreen