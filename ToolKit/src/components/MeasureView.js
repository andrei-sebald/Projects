import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback,Keyboard} from 'react-native';
import convert from 'convert-units'
import {Picker} from '@react-native-community/picker'

const DismissKeyboard =({children})=>(
  <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>

)
const MeasureView=({measure})=>{
    const units = convert().possibilities(measure)
    const [fromUnit, setFromUnit] = useState(units[0])
    const [toUnit, setToUnit] = useState(units[1])
    const [value,setValue]=useState('0')
    const [valueConverted,setValueConverted] = useState('0')
    useEffect(()=>{
      setValueConverted(convert(+value).from(fromUnit).to(toUnit).toFixed('3'))
    },[value,fromUnit, toUnit])
  
    return <DismissKeyboard>
    <View style={styles.scene}>
      
      <View style={styles.row}>
        <Picker 
          style={styles.column} 
          selectedValue={fromUnit} 
          onValueChange={setFromUnit}
        >
          {units.map((unit,index) =>(
            <Picker.Item label={unit} value={unit} key={index}/>
          ))}
        </Picker>
        <View style={styles.column}>
            <TextInput 
              value={value} 
              onChangeText={setValue} 
              keyboardType='numeric'
              style={styles.input}
              />
        </View>
      </View>
      
      <View style={styles.row}>
        <Picker 
          style={styles.column} 
          selectedValue={toUnit} 
          onValueChange={setToUnit}
        >
          {units.map((unit,index) =>(
            <Picker.Item label={unit} value={unit} key={index}/>
          ))}
        </Picker>
        <View style={styles.column}>
          <Text style={[styles.input,{fontSize:40, fontWeight:'bold'}]}>{valueConverted}</Text>
        </View>
      </View>
    </View>
    </DismissKeyboard>
  
  }
  const styles= StyleSheet.create({
    scene: {
        flex: 1
      },
      title:{
        padding: 15,
        fontWeight: 'bold',
        color:'#C2DFFF',
        fontSize: 20,
        textAlign: 'center'
      },
      row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
      },
      column:{
        flex:1,
        marginLeft:20,
        marginRight:20
      },
      input:{
        height:40,
        borderColor: 'blue',
        borderBottomWidth:1,
        fontSize: 30,
        textAlign: 'center'
      },
      logo:{
        width: 220,
        height: 150,
        marginLeft:100
       
      },
      
    
  })

  export default MeasureView