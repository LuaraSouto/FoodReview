import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RegisterRestautant from './src/screens/RegisterRestaurant';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import RegisterUser from './src/screens/RegisterUser';
import ValidateToken from './src/screens/ValidateToken';
 
const Stack = createNativeStackNavigator();
 
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }} >
        <Stack.Screen name='RegisterRestaurant' component={RegisterRestautant} />
        <Stack.Screen name="ValidateToken" component={ValidateToken} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="RegisterUser" component={RegisterUser} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
 
const styles = StyleSheet.create({
  App: {
    flex: 1,
    backgroundColor: 'white',
  },
});
 
export default () => {
  return (
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
  );
};
