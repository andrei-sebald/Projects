import React from 'react';
import {Text, TouchableOpacity, FlatList, TextInput,StyleSheet,View} from 'react-native'

const ErrorItem=({name,setValue,value})=>{
    return(
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <TextInput 
                value={value} 
                onChangeText={setValue} 
                keyboardType='numeric'
                style={styles.input}
                />
        </View>
    )
}


const styles = StyleSheet.create({
    input:{
        height:40,
        width:100,
        borderColor: 'blue',
        borderBottomWidth:1,
        fontSize: 30,
        textAlign: 'center',
        marginLeft: 150
      },
      container: {
          height:100,
          backgroundColor: 'white',
          borderRadius:10,
          margin:20,
          padding:40,
          flexDirection: 'row',
          alignItems:'center',
          shadowColor: '#52595D',
          shadowOpacity: 3,
          shadowRadius: 5 ,
          shadowOffset : { width: 1, height:3},

      },
      name:{
          fontSize:20,
          fontWeight: 'bold',
        
      }
})

export default ErrorItem