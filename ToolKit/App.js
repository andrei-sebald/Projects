import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CleanroomScreen from './src/screens/CleanroomScreen'
import ConversionScreen from './src/screens/ConversionScreen'
import HomeScreen from './src/screens/HomeScreen'
import IsoScreen from './src/screens/IsoScreen'
import ErrorScreen from './src/screens/ErrorScreen'


const Stack = createNativeStackNavigator();

const App=()=> {
  return (<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
        <Stack.Screen name="Conversion" component={ConversionScreen} />
        <Stack.Screen name="Cleanroom" component={CleanroomScreen} />
        <Stack.Screen name="Iso" component={IsoScreen} />
        <Stack.Screen name="Error" component={ErrorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

