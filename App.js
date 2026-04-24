import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// importando as telas da pasta src/screens
import HomeScreen from './src/screens/HomeScreen.jsx';
import ListScreen from './src/screens/ListScreen.jsx';
import DetailsScreen from './src/screens/DetailsScreen.jsx';

const Stack = createStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Bem-vindo Músico' }}
        />

        <Stack.Screen
          name="Lista"
          component={ListScreen}
          options={{ title: 'Encontrar Bandas' }}
        />

        <Stack.Screen
          name="Detalhes"
          component={DetailsScreen}
          options={{ title: 'Informações do Local' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}