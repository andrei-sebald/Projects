import React, {useState} from 'react';
import {Text, TouchableOpacity, FlatList, Modal,StyleSheet,View} from 'react-native'
import ErrorItem from '../components/ErrorItem'


//root squared mean  function
const RSCalc=(array)=>{
    var sum=0
    for (let i = 0; i < array.length; i++) {
        sum += array[i].num**2;
      }
    return(
        Math.sqrt(sum)
    )
}
const ErrorScreen=({navigation})=>{

// needs an id for key extractor
const [items,setItems]= useState([{id:0,num:""}])

const [rs,setRs]= useState(0)
const [errorModal,setErrorModal]=useState(false)
console.log(items)
    return(<View>

            <Modal
                transparent={true}
                visible={errorModal}
            >
                <View style={styles.backView}>
                    <View style= {styles.frontView}>
                    <Text style= {{fontSize:20}}>{`Root mean squared error: ${rs}`}</Text>
                    <TouchableOpacity
                        style={styles.buttonCalculate}
                        onPress={()=> setErrorModal(false)}
                    >
                         <Text style={styles.text}>Return</Text>
                    </TouchableOpacity>
                    </View>
                </View>

            </Modal>
            <View style={{flexDirection:'row',justifyContent: 'space-evenly'}}>
                <TouchableOpacity
                    style={styles.buttonNew}
                    onPress={()=>{
                        if (items.length<=4){
                            setItems([...items,{id:items.length,num:""}]);
                        }
                    }}                  
                >
                    <Text style={styles.text}>+ New Item</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonCalculate}
                    onPress={()=>{setItems([])}}
                >
                
                    <Text style={styles.text}>Clear</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonCalculate}
                    onPress={()=>{
                        setRs(RSCalc(items))
                        setErrorModal(true)
                    }}
                >
                
                    <Text style={styles.text}>Calculate</Text>
                </TouchableOpacity>
            </View>
                <FlatList
                    data={items}
                    renderItem={({item, index})=>(
                        <ErrorItem
                            name= {`Error ${index+1}`}
                            setValue={(number)=>{
                                var placeholder=[...items]
                                placeholder[index].num=number
                                setItems(placeholder)
                            }}
                            value={item.num}
                        /> 
                    )}
                    keyExtractor={item=>item.id}

                
                />
            </View>
    )
}


const styles = StyleSheet.create({
    text:{
        fontSize:17,
        color: 'white',
        textAlign: 'center',

        fontFamily:"Futura"
      },
      buttonNew:{
          alignItems: "center",
          backgroundColor: "#368BC1",
          marginTop: 20,
          marginBottom: 5,
          padding: 10,
        //   shadowColor: '#52595D',
        //   shadowOpacity: 3,
        //   shadowRadius: 5 ,
        //   shadowOffset : { width: 1, height:3},
          borderRadius: 30,
          borderWidth: 3,
          paddingHorizontal: 30,
          borderColor: 'white'
      },
      buttonCalculate:{
        alignItems: "center",
        backgroundColor: "#123456",
        marginTop: 20,
        marginBottom: 5,
        padding: 10,
        paddingHorizontal: 30,
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
        marginVertical:20,
        margin: 20,
        padding: 40, 
        paddingBottom:10,
        borderRadius:10
    },
})

export default ErrorScreen