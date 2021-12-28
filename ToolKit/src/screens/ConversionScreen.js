import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view'
import MeasureView from '../components/MeasureView'
import Constants from 'expo-constants';
import convert from 'convert-units';

//const measures = convert().measures()
const measures=["length",
"area",
"mass",
"volume",
"temperature",
"speed",
"pressure",
"volumeFlowRate"
]
const maincolor = '#123456'
const ConversionScreen= ({navigation})=>{
const [index, setIndex] =useState(0)
const [routes] = useState(measures.map(m=>({key:m,title:m})))
const renderScene= ({route})=>{
    return <MeasureView measure={route.key}/>
}


  return (
    
    <View style={styles.scene}>
      <TabView navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: Dimensions.get("window").width}}
        
        renderTabBar={(props)=>(
          <TabBar {...props} 
          scrollEnabled 
          tabStyle={{width : 'auto'}} 
          style={{backgroundColor: maincolor}}
          indicatorStyle = {{backgroundColor: 'white'}}
          />

        )}
      >
      </TabView>
    </View>

  )
}

const styles= StyleSheet.create({
    scene: {
        flex: 1,
        backgroundColor: "white"
      },
      title:{
        padding: 15,
        fontWeight: 'bold',
        color:maincolor,
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
        borderColor: maincolor,
        borderBottomWidth:1,
        fontSize: 30,
        textAlign: 'center'
      }
    
})

export default ConversionScreen