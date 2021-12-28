import React, {useState, useEffect} from 'react'
import {View, Text,Image, StyleSheet, TouchableOpacity, Modal, ScrollView} from 'react-native'
import {Picker} from '@react-native-community/picker'

const values = {
    iso:["Class3","Class4","Class5","Class6","Class7","Class8"],
    fed:["1","10","100","1000","10000","100000"],
    eu:["-","--","A/B","---","C","D"]
}


const CleanroomScreen=({navigation})=>{
const [iso,setIso]= useState(values.iso[0])
const [fed,setFed]= useState(values.fed[0])
const [eu,setEu]= useState(values.eu[0])
const [isoModal,setIsoModal]=useState(false)

const scroller=(index)=>{
    setIso(values.iso[index])
    setFed(values.fed[index])
    setEu(values.eu[index])

}




    return(<View style={styles.scene}>
        <View style={styles.column}>
            <Modal
                transparent={true}
                visible={isoModal}
            >
                <View style={styles.backView}>
                    <View style= {styles.frontView}>
                    <Image
                        style={styles.logo}
                        source={require('../../assets/cleanroom.png')}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={()=> setIsoModal(false)}
                    >
                         <Text style={styles.text}>Return</Text>
                    </TouchableOpacity>
                    </View>
                </View>

            </Modal>
            <TouchableOpacity
                style={styles.button}
                onPress={()=> setIsoModal(true)}
            >
                <Text style={styles.text}>ISO 14644-1</Text>
            </TouchableOpacity>
            <Picker 
            style={styles.column} 
            selectedValue={iso}
            onValueChange={(itemValue, itemIndex) => scroller(itemIndex)}
            >
            {values.iso.map((unit,index) =>(
                <Picker.Item label={unit} value={unit} key={index}/>
            ))}
            </Picker>
        </View>
        <View style={styles.column}>
            <TouchableOpacity
                    style={styles.button}
                    onPress={()=> navigation.navigate('Conversion')}
            >
                <Text style={styles.text}>Federal Standard 209E</Text>
            </TouchableOpacity>
            <Picker 
            style={styles.column} 
            selectedValue={fed}
            onValueChange={(itemValue, itemIndex) => scroller(itemIndex)}
            >
            {values.fed.map((unit,index) =>(
                <Picker.Item label={unit} value={unit} key={index}/>
            ))}
            </Picker>
        </View>
        <View style={styles.column}>
            <TouchableOpacity
                style={styles.button}
                onPress={()=> navigation.navigate('Conversion')}
            >
                <Text style={styles.text}>EU GMP</Text>
            </TouchableOpacity>
            <Picker 
            style={styles.column} 
            selectedValue={eu}
            onValueChange={(itemValue, itemIndex) => scroller(itemIndex)}
            >
            {values.eu.map((unit,index) =>(
                <Picker.Item label={unit} value={unit} key={index}/>
            ))}
            </Picker>
        </View>
    </View>)
    
}
const styles=  StyleSheet.create({
    pic:{
        height: 200,
        width:400
    },
    column:{
        flex:1,
        marginLeft:20,
        marginRight:20
    },
    scene:{
        flex: 1,
        backgroundColor: "white"
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
        
      },
    text:{
      fontSize:20,
      color: 'white',
      textAlign: 'center',
      fontFamily:"Futura"
    },
    button:{
        alignItems: "center",
        backgroundColor: "#123456",
        margin: 15,
        padding: 10,
        // shadowColor: '#52595D',
        // shadowOpacity: 3,
        // shadowRadius: 5 ,
        // shadowOffset : { width: 1, height:3},
        borderRadius: 30,
        borderWidth: 3,
        borderColor: 'white'
    },
    backView:{
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        flex: 1,


    },
    frontView: {
        backgroundColor:'white',
        flex:1,
        marginVertical:20,
        margin: 20,
        padding: 40, 
        paddingBottom:10,
        borderRadius:10
    },
    logo:{
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        
    }
})
export default CleanroomScreen