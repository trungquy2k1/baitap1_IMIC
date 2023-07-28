import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import HomePage from './Home';
import AppProvider from './AppContext';
const Stack = createNativeStackNavigator();
export function Index() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{title: 'Welcome'}}
          />
          <Stack.Screen name="HomePage" component={HomePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
