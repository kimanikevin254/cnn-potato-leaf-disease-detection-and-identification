import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SafeAreaView } from 'react-native';

import Instructions from './pages/Instructions';
import MainScreen from './pages/MainScreen';
import Splashscreen from './pages/Splashscreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Splashscreen'>
          <Stack.Screen name="Splashscreen" component={Splashscreen} options={{headerShown: false}} />
          <Stack.Screen name="Instructions" component={Instructions} />
          <Stack.Screen name="Mainscreen" component={MainScreen} options={{title: 'Prediction'}} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;