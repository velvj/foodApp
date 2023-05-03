/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import type {Node} from 'react';
import {
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './component/homeScreen/home';
import Category from './component/catagoryScreen/category';
import Buying from './component/buyingScreen/buying';

const Stack = createNativeStackNavigator();
const {Navigator, Screen} = Stack;

function App() {
  return (
    <>
      <NavigationContainer>
        <Navigator  screenOptions={{
    headerTransparent:true,
        // headerMode: 'screen',
        // headerTintColor: 'white',
        // presentation: 'transparentModal'
      }}>
          <Screen name="home" component={HomeScreen}  ></Screen>
          <Screen name="category" component={Category}></Screen>
          <Screen name='buying' component={Buying}></Screen>
        </Navigator>
      </NavigationContainer>

    </>
  );
}



export default App;
