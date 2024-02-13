import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View, ImageBackground } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { ButtonComponent } from '../components/ButtonComponent';
import { FormularioInicioSesion } from './InicioSesionScreen';
import { FormularioRegistro } from './RegistroScreen';

const Stack = createStackNavigator();
export const InicioScreen =({ navigation }:any)=> {

  const onPress = () => {
      
    navigation.navigate('FormularioInicioSesion');
  };
    return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://static.vecteezy.com/system/resources/previews/000/936/621/non_2x/vertical-covid-19-poster-with-medicine-vector.jpg',
        }}
        style={styles.imagenFondo}>
        <View style={styles.overlay}>
          <Text style={styles.title}>Bienvenido</Text>
          <Text style={styles.title}>MedicinExpress</Text>
          <View>
            <ButtonComponent title="Iniciar Sesion" onPress={() => navigation.navigate(FormularioInicioSesion)} />
          </View>
          <View>
            <ButtonComponent title="Registro" onPress={() => navigation.navigate(FormularioRegistro)} />
          </View>
          <View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#2E4053',
    marginBottom: 15,
    fontFamily:'times new roman',
    textDecorationLine: 'underline',
  },
  imagenFondo: {
    flex: 1,
    width: '118%', // Ajustar el ancho de la imagen al 100%
    height: '100%', // Ajustar la altura de la imagen al 100%
    resizeMode: 'cover',
  },
});