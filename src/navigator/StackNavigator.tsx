import 'react-native-gesture-handler'; 
import React from 'react' 
import { createStackNavigator } from '@react-navigation/stack'; 
import { InicioScreen } from '../screens/InicioScreen';
import { FormularioInicioSesion } from '../screens/InicioSesionScreen';
import { FormularioRegistro } from '../screens/RegistroScreen';
import { Menu } from '../screens/Menu';


export type RootStackParamList = {
    InicioScreen: undefined;
    FormularioInicioSesion: undefined;
    FormularioRegistro: undefined;
    Menu: undefined;
}

const Stack = createStackNavigator <RootStackParamList> (); 

export const StackNavigator=()=> { 
  return ( 
    <Stack.Navigator screenOptions={{ 
        cardStyle:{ 
        }}}> 
      <Stack.Screen name="InicioScreen" options={{headerShown:false}}component={InicioScreen} /> 
      <Stack.Screen name="FormularioInicioSesion" options={{headerShown:false}}component={FormularioInicioSesion} /> 
      <Stack.Screen name="FormularioRegistro" options={{headerShown:false}}component={FormularioRegistro} />
      <Stack.Screen name="Menu" options={{headerShown:false}}component={Menu} />
    </Stack.Navigator> 
  ); 
}